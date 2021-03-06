import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import chooseCadastro from './Usuario/Perfil/View/chooseCadastro';
import CadastroDocente from './Usuario/Perfil/View/CadastroDocente';
import CadastroDiscente from './Usuario/Perfil/View/CadastroDiscente';
import Login from './Login/view/Login';
import Manager from './Admin/View/manager';
import userProfile from './Usuario/userProfile';
import TrocaSenha from './Usuario/Perfil/View/TrocaSenha';
import TrocaEmail from './Usuario/Perfil/View/trocarEmail';
import EsqueceuSenha from './Login/view/EsqueceuSenha';
import RedefineSenha from './Login/view/RedefineSenha';
import ProcessoSeletivo from './ProcessoSeletivo/View/showProcessosSeletivos';
import SobreProcessoSeletivo from './ProcessoSeletivo/View/sobreProcessoSeletivo';
import CadastroProcessoSeletivo from './ProcessoSeletivo/View/cadastroProcessoSeletivo';
import EditalProcessoSeletivo from './ProcessoSeletivo/View/editalProcessoSeletivo';
import Email from './Comunicacao/view/enviarEmail';
import SearchPage from './Search//view/SearchPage';
import ShowProject from './Projeto/view/showProject';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/cadastro' component={chooseCadastro}></Route>
			<Route exact path='/cadastro/Docente' component={CadastroDocente}></Route>
			<Route
				exact
				path='/cadastro/Discente'
				component={CadastroDiscente}
			></Route>
			<Route exact path='/login' component={Login}></Route>
			<Route exact path='/perfil' component={userProfile}></Route>
			<Route exact path='/pesquisar' component={SearchPage}></Route>
			<Route exact path='/admin' component={Manager} />
			<Route exact path='/perfil/trocarSenha' component={TrocaSenha} />
			<Route exact path='/perfil/trocarEmail' component={TrocaEmail} />
			<Route exact path='/esqueceuSenha' component={EsqueceuSenha} />
			<Route path='/reset-password/:access_token' component={RedefineSenha} />
			<Route
				path='/projeto/:id/processoSeletivo'
				component={ProcessoSeletivo}
			></Route>
			<Route
				exact
				path='/processoSeletivo/:processoId'
				component={SobreProcessoSeletivo}
			></Route>
			<Route
				exact
				path='/processoSeletivo/:processoId/cadastro'
				component={CadastroProcessoSeletivo}
			></Route>
			<Route
				exact
				path='/processoSeletivo/:processoId/edital'
				component={EditalProcessoSeletivo}
			></Route>
			<Route exact path='/projeto/email/:id' component={Email}></Route>
			<Route
				path='/showProject/:id'
				render={({match}) => <ShowProject idEvento={match.params.id} />}
			/>
		</Switch>
	</main>
);

export default Main;
