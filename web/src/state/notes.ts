// import { useState, useEffect } from "react";
// import { BehaviorSubject } from "rxjs";

// const subjects: Record<string, any> = {};

// export const NOTES_STATE = "NOTES_STATE";

// function getNewSubject(initValue: any) {
//     return new BehaviorSubject(initValue);
// }

// export const getSharedStateValue = (subjectname: any) => {
//     if (!subjects[subjectname]) {
//         return undefined;
//     }

//     const subject = subjects[subjectname];

//     return subject.value;
// };

// export const useSharedState = (subjectname: string, initval: any) => {
//     const [value, setValue] = useState(initval);

//     if (!subjects[subjectname]) {
//         subjects[subjectname] = getNewSubject(initval);
//     }

//     const subject = subjects[subjectname];

//     useEffect(() => {
//         const subscription = subject.subscribe((message: any) => {
//             setValue(message);
//         });

//         return () => {
//             if (subscription) {
//                 subscription.unsubscribe();
//             }
//         };
//     }, [subject]);

//     function set(val: any) {
//         subject.next(val);
//     }

//     return [value, set];
// };

export default {};
