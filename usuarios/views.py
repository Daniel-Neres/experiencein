from django.shortcuts import render, redirect
from django.views.generic.base import View
from django.contrib.auth.models import User
from perfis.models import Perfil
from usuarios.forms import RegistrarUsuarioForm
# Create your views here.

class RegistrarUsuarioView(View):
    template_name = 'registrar.html'

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        #preenche o form
        form = RegistrarUsuarioForm(request.POST)

        #verifica se é valido
        if form.is_valid():
            dados_form = form.data
            
            #cria o usuário
            usuario = User.objects.create_user(dados_form['nome'], dados_form['email'], dados_form['senha'])

            #cria o perfil
            perfil = Perfil(nome=dados_form['nome'], telefone=dados_form['telefone'], nome_empresa=dados_form['nome_empresa'], usuario=usuario)

            #grava no banco
            perfil.save()

            #redireciona para index
            return redirect('index')
        return render(request, self.template_name, {'form': form})