import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UserLogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    window.scroll(0, 0)

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {

    if (this.user.nome.length < 6) {
      alert('Preencha campo nome com pelo menos 6 caracteres')
    }

    if (this.user.usuario.indexOf('@') == - 1 || this.user.usuario.indexOf('.') == -1) {
      alert('Cadastre um email válido como usuário')
    }

    if (this.user.senha.length < 6) {
      alert('Preencha campo senha com pelo menos 6 caracteres')
    }
    

    this.user.tipo = this.tipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      alert('Senhas incorretas')
    }
    else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }
}


