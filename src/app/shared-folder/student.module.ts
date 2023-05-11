export interface Student {
  name: string;
  sport?: [
    {
      grade: number;
      date: Date;
    }
  ];
  science?: [
    {
      grade: number;
      date: Date;
    }
  ];
  music?: [
    {
      grade: number;
      date: Date;
    }
  ];
  history?: [
    {
      grade: number;
      date: Date;
    }
  ];
  math?: [
    {
      grade: number;
      date: Date;
    }
  ];
}
