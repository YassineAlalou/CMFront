import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

/* tslint:disable */



const baseData: any[] = [
  {
    id: 4,
    motif: 'Bowling tournament',
    dater: '2020-01-15',
  },
];

const currentYear = new Date().getFullYear();

const parseAdjust = (eventDate: string): Date => {
  const date = new Date(eventDate);
  date.setFullYear(currentYear);
  return date;
};
export const displayDate = new Date();


export const sampleData = baseData.map(dataItem => (
  {
    id: dataItem.id,
    start: parseAdjust(dataItem.Start),
    startTimezone: dataItem.startTimezone,
    end: parseAdjust(dataItem.End),
    endTimezone: dataItem.endTimezone,
    isAllDay: dataItem.IsAllDay,
    title: dataItem.Title,
    description: dataItem.Description,
    recurrenceRule: dataItem.RecurrenceRule,
    recurrenceId: dataItem.RecurrenceID,
    recurrenceException: dataItem.RecurrenceException,
    roomId: dataItem.RoomID,
    ownerID: dataItem.OwnerID
  } as SchedulerEvent
));


