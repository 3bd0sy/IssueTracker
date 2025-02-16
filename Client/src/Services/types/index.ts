export interface ControlType {
  onDlete: (documentId: string) => void;
  onEdit: (documentId: string) => void;
  showComments?: () => void;
  CommentsNumber: number;
  documentId: string;
  handleSaveIssue: () => void;
}

export interface CounterType {
  id: number;
  increaseCounter: (id: number) => void;
  counterValue: number;
  decreaseCounter: (id: number) => void;
}
export interface issueStatusType {
  issueStatus: "Open" | "Closed" | "In-progress";
}

export interface issue {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
  createdAt: string;
  counter: number;
}

export type IssueType = issue & CounterType & ControlType & issueStatusType;

//######################################

export interface dataType {
  data: IssueType[];
}

//#######################################

export interface FilterItem {
  value: string;
  label: string;
}

export interface Dropdown {
  name: string;
  label: string;
  items: FilterItem[];
}

export interface filterType {
  [key: string]: string;
  status: "In-progress" | "Closed" | "Open" ;
  date: "Oldest" | "Newest";
}

export interface filtersPropsType {
  filtering: (filterType: filterType) => void;
  children: React.ReactNode;
}

export interface SavedIssueCardType {
  documentId: string;
  title: string;
  date: string;
  state: "Open" | "Closed" | "In-progress";
  username: string;
  deleteSavedIssue: (documentId: string) => void;
}

//###################################33
export interface SavedIssueType {
  documentId?: string;
  issue_id: string;
  username: string;
  issuetitle: string;
  issuestate: "Open" | "Closed" | "In-progress";
  issueid: string;
  issuedate: string;
}

//###################################33
export interface formType {
  title: string;
  description: string;
  imageUrl: string;
  counter: number;
  issueStatus: "Open" | "Closed" | "In-progress";
}

export interface routeType {
  isAuthenticated: boolean;
  children: React.ReactNode;
  path: string;
}

export interface alertType {
  show: boolean;
  type: "success" | "error";
  message: string;
}

export interface buttonType {
  onClick: () => void;
  children: React.ReactNode;
  path: string;
}
