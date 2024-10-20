

const admin = {
  id: 1,
  email: "admin@company.com",
  name: "Manjeet",
  password: "123",
  taskTitle: "Review Financial Reports",
  description: "Review and approve the company's quarterly financial reports.",
  taskDate: "2024-11-01",
  category: "Management",
};

const employees = [
  {
    id: "2",
    email: "employee1@company.com",
    password: "123",
    name: "Vishnu",
    newTask: 2,
    acceptTasks: 4,
    completedTasks: 3,
    failedTasks: 1,
    task: [
      {
        description: "Create wireframes for the landing page.",
        title: "Design Wireframes",
        active: false,
        failed: false,
        complete: false,
        new: true,
        date: "2024-10-21",
        category: "Design",
      },
      {
        description: "Finalize design assets for the client review.",
        title: "Prepare Design Assets",
        active: false,
        failed: false,
        complete: true,
        new: false,
        date: "2024-10-18",
        category: "Design",
      },
    ],
  },
  {
    id: "3",
    email: "employee2@company.com",
    password: "123",
    name: "Rahul",
    newTask: 1,
    acceptTasks: 3,
    completedTasks: 2,
    failedTasks: 1,
    task: [
      {
        description: "Integrate third-party API for user authentication.",
        title: "API Integration",
        active: true,
        failed: false,
        complete: false,
        new: true,
        date: "2024-10-22",
        category: "Development",
      },
    ],
  },
  {
    id: "4",
    email: "employee3@company.com",
    password: "123",
    name: "Pratham",
    newTask: 1,
    acceptTasks: 3,
    completedTasks: 3,
    failedTasks: 0,
    task: [
      {
        description: "Fix registration form bug affecting user sign-ups.",
        title: "Fix Registration Bug",
        active: true,
        failed: false,
        complete: true,
        new: false,
        date: "2024-10-23",
        category: "Development",
      },
    ],
  },
  {
    id: "5",
    email: "employee4@company.com",
    password: "123",
    name: "Alok",
    newTask: 2,
    acceptTasks: 4,
    completedTasks: 2,
    failedTasks: 1,
    task: [
      {
        description: "Optimize database queries for faster loading times.",
        title: "Optimize Queries",
        active: true,
        failed: true,
        complete: false,
        new: false,
        date: "2024-10-20",
        category: "Database",
      },
    ],
  },
  {
    id: "6",
    email: "employee5@company.com",
    password: "123",
    name: "Mukesh",
    newTask: 1,
    acceptTasks: 3,
    completedTasks: 3,
    failedTasks: 0,
    task: [
      {
        description: "Design promotional materials for the product launch.",
        title: "Design Marketing Materials",
        active: true,
        failed: false,
        complete: true,
        new: false,
        date: "2024-10-19",
        category: "Marketing",
      },
    ],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};