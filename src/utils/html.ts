export const form = `
<form method="post">
    <div>
        <label>Email</label>
        <input name="email"/>
    </div>
    <div>
        <label>Password</label>
        <input name="password" type="password"/>
    </div>
    <div>
        <button>Submit</button>        
    </div>
</form>    
`;

export const loggedIn = `
    <div>
        <div><h1>You are logged in!</h1></div>
        <a href="/auth/logout">Logout</a>
        <a href="/protected">Protected</a>
    </div>
`;

export const notLoggedIn = `
    <div>
        <div><h1>You are not logged in!</h1></div>
        <a href="/auth/login">Login</a>
    </div>
`;
