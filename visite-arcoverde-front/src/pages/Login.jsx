import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro(''); // Limpa erros anteriores

    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha })
      });

      if (res.ok) {
        // O backend retorna o token em formato de texto (string)
        const token = await res.text(); 
        
        // Guarda o token no armazenamento do navegador
        localStorage.setItem('jwtToken', token);
        
        // Avisa o componente pai (App ou Router) que o login foi bem-sucedido
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setErro('Credenciais inválidas. Verifique o seu e-mail e senha.');
      }
    } catch (error) {
      setErro('Erro ao conectar com o servidor. O backend está a correr?');
    }
  };

  return (
    <div className="min-h-screen bg-areia flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border-t-4 border-terracota">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-terracota mb-2">Acesso Restrito</h1>
          <p className="text-gray-600">Portal do Administrador - Visite Arcoverde</p>
        </div>

        {/* Alerta de Erro */}
        {erro && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 text-sm rounded">
            {erro}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Campo de E-mail */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                placeholder="admin@arcoverde.com"
                required
              />
            </div>
          </div>

          {/* Campo de Senha */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-laranja focus:ring-1 focus:ring-laranja"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Botão de Submissão */}
          <button
            type="submit"
            className="w-full bg-laranja hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 mt-4"
          >
            <LogIn size={20} /> Entrar no Painel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;