import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthGuard } from 'src/app/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 
  constructor(public authGuard: AuthGuard , private authService: AuthService) {}
  isLoggedIn = this.authGuard.isLoggedIn ;
  logout() {
    this.authService.logout();
    window.location.reload();
  }
  ngOnInit(): void {
    console.log(this.isLoggedIn);
  }

}
