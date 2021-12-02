import { AssignmentStatistics } from "./Assignments";
import { InterviewStatistics } from "./Interviews";
import { QuestionStatistics } from "./Questions";
import { TopicStatistics } from "./Topics";

export interface DashboardStatistics {
    question: QuestionStatistics;
    topic: TopicStatistics;
    interview: InterviewStatistics;
    assignment: AssignmentStatistics;
}