
import React from 'react';
import { Course, Location } from './types';

export const COURSES: Course[] = [
  {
    id: 'kids-ok',
    name: 'Eigo OK',
    nameJp: '英語おしゃべりキッズ',
    description: '遊びや会話を通じて、楽しく英語に触れるコースです。初めての英語に最適です。',
    target: '幼児・年少〜年長',
    duration: '40分',
    colorClass: 'border-jec-green'
  },
  {
    id: 'kids-1-3',
    name: 'Kids Level 1-3',
    nameJp: 'キッズ英語 レベル1〜3',
    description: '小学校低学年向けの基礎コース。フォニックスや日常会話をバランスよく学びます。',
    target: '小学1年生〜3年生',
    duration: '50分',
    colorClass: 'border-jec-yellow'
  },
  {
    id: 'kids-4-6',
    name: 'Kids Level 4-6',
    nameJp: 'キッズ英語 レベル4〜6',
    description: '小学校高学年向けの応用コース。文法理解を深め、自分の言葉で伝える力を養います。',
    target: '小学4年生〜6年生',
    duration: '60分',
    colorClass: 'border-jec-orange'
  },
  {
    id: 'steam',
    name: 'STEAM Powered',
    nameJp: 'スチーム・パワード',
    description: '科学、技術、工学、芸術、数学を英語で学ぶ、新しいスタイルの探求型クラスです。',
    target: '幼児〜中学生',
    duration: '60分/90分',
    colorClass: 'border-jec-green'
  },
  {
    id: 'junior-high',
    name: 'Junior High English',
    nameJp: '中学英語・英会話',
    description: '学校の授業対策から、将来使える実践的なコミュニケーション能力まで幅広くカバー。',
    target: '中学生',
    duration: '60分',
    colorClass: 'border-jec-yellow'
  },
  {
    id: 'eiken',
    name: 'Eiken Prep',
    nameJp: '英検対策',
    description: '英検合格を目指すための専門コース。級に応じたポイントを効率よく指導します。',
    target: '小学生〜',
    duration: '60分',
    colorClass: 'border-jec-orange'
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'kuki',
    name: '久喜教室 (Kuki School)',
    address: '埼玉県久喜市（久喜駅近く）',
    phone: '070-2158-4162',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103328.751214088!2d139.6766444!3d36.062024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018b956a9388c45%3A0x633d7b407b9a5270!2sKuki%2C%20Saitama!5e0!3m2!1sen!2sjp!4v1716100000000!5m2!1sen!2sjp',
    externalMapUrl: 'https://maps.app.goo.gl/b91mbZMUkkAviGAm9',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'koshigaya',
    name: '越谷教室 (Koshigaya School)',
    address: '埼玉県越谷市（越谷駅近く）',
    phone: '070-2158-4162',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103517.954625295!2d139.78917!3d35.890696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601890064f266205%3A0x4a938c6427d6e676!2sKoshigaya%2C%20Saitama!5e0!3m2!1sen!2sjp!4v1716100000001!5m2!1sen!2sjp',
    externalMapUrl: 'https://maps.app.goo.gl/4hejNJcMRCJpo9Ym8',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800'
  }
];

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const SUGGESTIONS = [
  '小学生向け英会話',
  '英検対策',
  '幼児向け英語',
  '中学英語・文法',
  '日常英会話',
  'STEAMレッスン'
];
