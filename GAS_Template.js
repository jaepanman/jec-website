
/**
 * GOOGLE APPS SCRIPT TEMPLATE (V3 - Nuclear Robustness)
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Delete everything and paste this code.
 * 4. Update RECIPIENT_EMAIL.
 * 5. Deploy > New Deployment > Web App (Me, Anyone).
 * 6. Use the NEW URL in your Vercel settings.
 */

const RECIPIENT_EMAIL = "admin@jec-eigo.com";

function doPost(e) {
  try {
    var data = {};
    
    // Try to parse JSON from postData first
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        // If JSON parsing fails, maybe it's URL encoded in contents?
        // Fallback for some browser environments
        console.warn("JSON parse failed, trying parameter fallback");
      }
    }

    // Fallback to parameters if data is still empty (common in some CORS-less setups)
    if (Object.keys(data).length === 0) {
      data = e.parameter;
    }

    // Safety check: ensure we have something
    if (!data || Object.keys(data).length === 0) {
      throw new Error("No usable data received in doPost");
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    
    // Exact mapping to match TrialForm.tsx payload
    var headers = [
      "Timestamp", "Parent Name", "Email", "Student Name", 
      "Age", "Grade", "Experience", "Eiken", "Interests", 
      "Lesson Type", "Location", "Availabilities"
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }

    // Extract values with strict normalization
    var row = [
      data.submittedAt || new Date().toLocaleString('ja-JP', {timeZone: 'Asia/Tokyo'}),
      data.parentName || "Unknown",
      data.email || "N/A",
      data.studentName || "本人",
      data.age || "N/A",
      data.grade || "N/A",
      data.experience || "なし",
      data.eikenCertification || "なし",
      data.interests || "特になし",
      data.lessonType || "未指定",
      data.locationName || "未指定",
      data.availabilities || "未選択"
    ];

    sheet.appendRow(row);

    // Email Notification
    var subject = "【JEC】新規体験申込: " + (data.parentName || "不明") + " 様";
    var body = "新しい体験レッスンの申し込みを受け付けました。\n\n" +
               "--------------------------------------------------\n" +
               "■ 基本情報\n" +
               "お名前: " + (data.parentName || "N/A") + "\n" +
               "メール: " + (data.email || "N/A") + "\n\n" +
               "■ 生徒情報\n" +
               "生徒名: " + (data.studentName || "本人") + "\n" +
               "年齢/学年: " + (data.age || "N/A") + " / " + (data.grade || "N/A") + "\n" +
               "経験: " + (data.experience || "なし") + "\n" +
               "英検: " + (data.eikenCertification || "なし") + "\n\n" +
               "■ 希望内容\n" +
               "場所: " + (data.locationName || "未指定") + "\n" +
               "形式: " + (data.lessonType || "未指定") + "\n" +
               "備考: " + (data.interests || "特になし") + "\n\n" +
               "■ 希望日時\n" +
               (data.availabilities || "未選択") + "\n" +
               "--------------------------------------------------\n\n" +
               "送信時刻: " + (data.submittedAt || "N/A") + "\n" +
               "スプレッドシートをご確認ください。";

    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: subject,
      body: body
    });

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    
  } catch (error) {
    console.error("Critical Failure:", error.toString());
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}
