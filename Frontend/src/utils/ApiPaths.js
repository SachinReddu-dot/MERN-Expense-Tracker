export const BASE_URL = 'http://localhost:3000'

export const API_PATHS= {
    AUTH:{
        LOGIN: '/api/v1/auth/login',
        REGISTER: '/api/v1/auth/register',
        GET_USER: '/api/v1/auth/user-info',
    },
    DASHBOARD:{
        GET_ALL_DATA: '/api/v1/dashboard',

    },
    INCOME: {
        ADD_INCOME: '/api/v1/income/add',
        GET_ALL_INCOME: '/api/v1/income/get',
        DOWNLOAD_INCOME: '/api/v1/income/download-income',
        DELETE_INCOME: (incomeId) => `/api/v1/income/delete/${incomeId}`
    },
    EXPENSE: {
        ADD_EXPENSE: '/api/v1/expense/add',
        GET_ALL_EXPENSE: '/api/v1/expense/get',
        DOWNLOAD_EXPENSE: '/api/v1/expense/download-expense',
        DELETE_EXPENSE: (expenseId) => `/api/v1/expense/delete/${expenseId}`
    },
    IMAGE:{
        UPLOAD_IMG: '/api/v1/auth/upload-profile' 
    }

}