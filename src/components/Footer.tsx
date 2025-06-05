
import React from 'react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              BusinessGlow
            </h3>
            <p className="text-gray-400 mb-4">
              Capacitando negócios para desbloquear seu potencial digital com insights alimentados por IA e estratégias de crescimento.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Análise Gratuita</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Recursos Premium</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Empresarial</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Acesso à API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BusinessGlow. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Termos
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
