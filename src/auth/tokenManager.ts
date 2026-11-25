
export function writeToken(token:string):void {
    localStorage.setItem('token',token);
}

export function readToken():string|null {
    // return localStorage.getItem('token');
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzk1NjIzNDI0fQ.LPQB6rlbtQJSRcaVAwkFp0dNCWiFHktuCQT2HYkZTmU'
}

export function clearToken():void {
    localStorage.removeItem('token');
}