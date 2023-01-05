import { postService, getService } from "../commonServices";

export class AuthService {
  loginUser(email, password) {
    const body = JSON.stringify({ email, password });
    console.log(body, 'signin body')
    let url = `/admin-auth/signin`;
    let data = postService(url, body);
    return data;
  }
  loadMe() {
    let url = `admin-auth/load-me`;
    let data = getService(url);
    return data;
  }
}
