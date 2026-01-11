
export enum LessonType {
  GROUP = 'Group',
  PRIVATE = 'Private',
  EITHER = 'Either'
}

export interface Course {
  id: string;
  name: string;
  nameJp: string;
  description: string;
  target: string;
  duration: string;
  colorClass: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
  externalMapUrl: string;
  image: string;
}

export interface Availability {
  day: string;
  time: string;
}

export interface TrialFormData {
  parentName: string;
  studentName: string;
  email: string;
  isAdult: boolean;
  age?: string;
  grade?: string;
  experience?: string;
  interests: string;
  lessonType: LessonType;
  locationId: string;
  availabilities: Availability[];
}
