import { PointEstimate } from "../enums/PointEstimate.enum";
import { Status } from "../enums/Status.enum";
import { TaskTag } from "../enums/TaskTag.enum";

export interface FilterTaskInput {
    assigneeId?: string | null;
    dueDate?: string ;
    name?: string;
    ownerId?: string;
    pointEstimate?: PointEstimate;
    status?: Status;
    tags?: TaskTag[];
}