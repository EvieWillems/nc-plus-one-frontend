
export function writeToken(token:string):void {
    localStorage.setItem('token',token);
}

export function readToken():string|null {
    return localStorage.getItem('token');
}

export function clearToken():void {
    localStorage.removeItem('token');
}