// localStorage.clear()
const employees = [
  {
  id: 1,
  userName: "Ali Raza",
  email: "ali@example.com",
  password: "123",
  taskCount: {
    active: 1,
    newTask: 1,
    completed: 1,
    failed: 1
  },
  tasks: [
    {
      title: "Submit Report",
      description: "Submit monthly financial report to manager.",
      date: "2025-06-18",
      category: "Finance",
      active: true,
      newTask: true,
      completed: false,
      failed: false
    },
    {
      title: "Team Meeting",
      description: "Attend the scheduled team sync-up meeting.",
      date: "2025-06-20",
      category: "Meetings",
      active: false,
      newTask: false,
      completed: true,
      failed: false
    },
    {
      title: "Fix Bugs",
      description: "Resolve bugs reported in issue tracker.",
      date: "2025-06-17",
      category: "Development",
      active: false,
      newTask: false,
      completed: false,
      failed: true
    },
  ]
},
  {
    id: 2,
    userName: "Zain Khan",
    email: "zain@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Code Review",
        description: "Review the new code commits on GitHub.",
        date: "2025-06-19",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Docs",
        description: "Update API documentation with latest changes.",
        date: "2025-06-20",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Test Login",
        description: "Test login page functionality on staging.",
        date: "2025-06-18",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Feedback",
        description: "Incorporate feedback received from client.",
        date: "2025-06-15",
        category: "Client",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    userName: "Hassan Javed",
    email: "hassan@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Deploy App",
        description: "Deploy the new version of the app to production.",
        date: "2025-06-19",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "User Testing",
        description: "Conduct user testing session for new features.",
        date: "2025-06-18",
        category: "UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Research Tools",
        description: "Research tools for automating workflows.",
        date: "2025-06-20",
        category: "R&D",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Email Bug",
        description: "Fix issue with email notifications.",
        date: "2025-06-15",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Daily Standup",
        description: "Attend daily standup call with team.",
        date: "2025-06-20",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    userName: "Sana Tariq",
    email: "sana@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Banner",
        description: "Design promotional banner for the homepage.",
        date: "2025-06-18",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create Survey",
        description: "Draft a customer satisfaction survey.",
        date: "2025-06-17",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Layout",
        description: "Resolve layout issues on mobile view.",
        date: "2025-06-16",
        category: "UI",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Post on Socials",
        description: "Share updates on social media channels.",
        date: "2025-06-19",
        category: "Social Media",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    userName: "Ayesha Siddiqui",
    email: "ayesha@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Conduct Interview",
        description: "Interview candidate for frontend developer role.",
        date: "2025-06-20",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Payroll Update",
        description: "Update payroll system with new employee data.",
        date: "2025-06-18",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Employee Feedback",
        description: "Collect monthly feedback from all employees.",
        date: "2025-06-19",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}