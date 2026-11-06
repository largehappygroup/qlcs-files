export interface Assignment {
    uuid?: string;
    chapterId?: string;
    title: string;
    identifier: string;
    dueDate: Date;
}

export interface WithAssignment {
    assignment?: Assignment;
}

export interface WithAssignmentId {
    assignmentId?: string;
}

export const assignmentIdentifiers = [
    "redacted"
];
