class ApiResponse {
    constructor(statusCode , data , message = "succes"){
        this.message = message
        this.statusCode = statusCode
        this.data = data
        this.success = success
    }
}


export {ApiResponse}