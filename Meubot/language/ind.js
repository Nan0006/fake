const a = '```'

exports.wait = () => {
	return`*γ π± Aguarde π± γ* _β ESTA EM PROCESSO β_`
}

exports.ocron = () => {
	return`*γ π± Falha π± γ* _Marque uma imagem_`
}

exports.succes = () => {
	return`*γ πΉ Deu Certo πΉ γ*`
}

exports.lvlon = () => {
	return`*γ π₯ ATIVADO π₯ γ* _LEVELING_`
}

exports.lvloff = () => {
	return`*γ π DESATIVADO π γ* _LEVELING_`
}

exports.lvlnul = () => {
	return`π€ _Voce ainda nΓ£o possui Level_ π€`
}

exports.lvlnoon = () => {
	return`ππ»ββοΈ _Leveling Esta Desativado_ ππ»ββοΈ`
}

exports.noregis = () => {
	return`*γ π§ Voce nΓ£o esta Registrado π§ γ*\n\n _π Se registre para participar de eventos e subir ate o topo π_ \n\n *ππ»ββοΈ Para se Registrar Γ© so Digitar ππ»ββοΈ*\n\n ${prefix}registrar nome / idade`
}

exports.rediregis = () => {
	return`*γ π¨ Usuario Ja Registrado π¨ γ*`
}

exports.stikga = () => {
	return`*π Falhou, Tente repetir depois. π*`
}

exports.linkga = () => {
	return`*β Link Invalido β*`
}

exports.groupo = () => {
	return`*γβ οΈ So Pode Usar Esse Comando Nos Grupos β οΈγ*`
}

exports.ownerb = () => {
	return`*γβ οΈ Esse Comando So Pode Ser Usado Pelo Dono Do Bot β οΈγ*`
}

exports.ownerg = () => {
	return`*γβ οΈ Esse Comando So Pode Ser Usado Pelo Dono Do Bot β οΈγ*`
}

exports.admin = () => {
	return`*γβ οΈ So Administradores Podem Usar Esse Comando β οΈγ*`
}

exports.badmin = () => {
	return`*γπͺ Para Esse Comando Funcionar Eu Tenho Que Ser Administrador πͺγ*`
}

exports.nsfwoff = () => {
	return`*γVida No Crimeγ* _π· O Crime Esta Proibido, Esperem Liberarem π·_`
}

exports.bug = () => {
	return`*π― Sua Mensagem Ja Foi Enviado Para O Meu Dono, Mensagens Atoa e Falsas NΓ£o SerΓ£o Respondidas π―*`
}

exports.wrongf = () => {
	return`_π VocΓͺ Esta Escrevendo Errado Ou Esta Deixando Algo Em Branco π_ Exemplo: #registrar nome / idade`
}

exports.clears = () => {
	return`*ποΈ Limpando Tudo ποΈ*`
}

exports.pc = () => {
	return`*γ π Se Cadastrando π γ*\n\n_Para saber se vocΓͺ se cadastrou, verifique a mensagem que enviei_ \n\n*π Se Voce NΓ£o Achou A Mensagem Γ Por Que Voce NΓ£o Se Cadastrou π*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*γ π₯ Membro Cadastrado π€ γ*\n\n_π Parabens Voce Se Cadastrou π_ \n\nβββ±π° *γNomeγ* π°\nββ±${namaUser}\nβββ±π° *γNumeroγ* π°\nββ±wa.me/${sender.split("@")[0]}\nβββ±π° *γIdadeγ* π°\nββ±${umurUser}\nβββ±π° *Horario Do Registro* π°\nββ±${time}\n\nβββ *π Serial π* ββ\nβ£β±${serialUser}\n\n π§ _Salva esse codigo ai, talvez voce vai precisar dele_ π§`
}

exports.cmdnf = (prefix, command) => {
	return`β οΈ _Comando_ *${prefix}${command}* _nΓ£o encontrado teste escrever_ *${prefix}menu* β οΈ`
}

exports.owneresce = (pushname) => {
	return`*π§ ${pushname} Script do dono nΓ£o encontrado π§*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*${pushname} _π Seu Level NΓ£o Γ Suficiente π_\n\n*ββ± π₯ *γSeu Levelγ : ${getLevelingLevel(sender)}*\n*β£β± β *γComandoγ  : ${command}*\n*ββ± π§οΈ *γRequisito de Levelγ : ${aha}*\n\n_π§ AtenΓ§Γ£o π§_\n π *Sempre falar no grupo para ganhar XP* π`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*${pushname} _π Seu Level NΓ£o Γ Suficiente π_\n\n*ββ± π₯ *γSeu Levelγ : ${getLevelingLevel(sender)}*\n*β£β± β *γComandoγ  : ${command}*\n*ββ± π§οΈ *γRequisito de Levelγ : ${ahb}*\n\n_π§ AtenΓ§Γ£o π§_\n π *Sempre falar no grupo para ganhar XP* π`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*${pushname} _π Seu Level NΓ£o Γ Suficiente π_\n\n*ββ± π₯ *γSeu Levelγ : ${getLevelingLevel(sender)}*\n*β£β± β *γComandoγ  : ${command}*\n*ββ± π§οΈ *γRequisito de Levelγ : ${ahc}*\n\n_π§ AtenΓ§Γ£o π§_\n π *Sempre falar no grupo para ganhar XP* π`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*${pushname} _π Seu Level NΓ£o Γ Suficiente π_\n\n*ββ± π₯ *γSeu Levelγ : ${getLevelingLevel(sender)}*\n*β£β± β *γComandoγ  : ${command}*\n*ββ± π§οΈ *γRequisito de Levelγ : ${ahd}*\n\n_π§ AtenΓ§Γ£o π§_\n π *Sempre falar no grupo para ganhar XP* π`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*${pushname} _π Seu Level NΓ£o Γ Suficiente π_\n\n*ββ± π₯ *γSeu Levelγ : ${getLevelingLevel(sender)}*\n*β£β± β *γComandoγ  : ${command}*\n*ββ± π§οΈ *γRequisito de Levelγ : ${ahe}*\n\n_π§ AtenΓ§Γ£o π§_\n π *Sempre falar no grupo para ganhar XP* π`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*${pushname} _π Seu Level NΓ£o Γ Suficiente π_\n\n*ββ± π₯ *γSeu Levelγ : ${getLevelingLevel(sender)}*\n*β£β± β *γComandoγ  : ${command}*\n*ββ± π§οΈ *γRequisito de Levelγ : ${ahf}*\n\n_π§ AtenΓ§Γ£o π§_\n π *Sempre falar no grupo para ganhar XP* π`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client, process, pepolu) => { 
	return `

- ΝΜ ΰΉβͺ β *[Μ²ΜBΜ²ΜΡΜ²ΜΠΌΜ²Μ Μ²ΜVΜ²ΜiΜ²ΜΠΈΜ²ΜdΜ²ΜΟΜ²Μ] ${pushname}* β β«ΰΉ ΛΜ©Μ₯Μ©Μ₯.

γβ ε½‘ βͺ *π²πππππππ π³π πΌππππ* β« β.

εεεεεεεεεεεεεεεεε

β’β°ββΊ π ${prefix}aventurar
*β°ββ±β°ββ±*
β’β°ββΊ β ${prefix}brincadeiras
*β°ββ±β°ββ±*
β’β°ββΊ π» ${prefix}jogos
*β°ββ±β°ββ±*
β’β°ββΊ πΉ ${prefix}velha
*β°ββ±β°ββ±*
β’β°ββΊ π₯ ${prefix}figurinhas
*β°ββ±β°ββ±*
β’β°ββΊ π― ${prefix}picture
*β°ββ±β°ββ±*
β’β°ββΊ π± ${prefix}transferencia
*β°ββ±β°ββ±*
β’β°ββΊ π· ${prefix}download
*β°ββ±β°ββ±*
β’β°ββΊ π₯§ ${prefix}comandos
*β°ββ±β°ββ±*
β’β°ββΊ π£ ${prefix}administraΓ§Γ£o
*β°ββ±β°ββ±*
β’β°ββΊ β ${prefix}donobot
*β°ββ±β°ββ±*

εεεεεεεεεεεεεεεεε

, *π΅π π©πΆππΉπ* 

β π€ππ―πͺπ·π¦π³π΄π°π€ππ΅π’π¬πΆπ€

`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*γ π Voce Upou Parabens π γ*


ββ± π± *γNomeγ* : ${pushname}
β
β£β± πͺ *γNumeroγ* : wa.me/${sender.split("@")[0]}
β
β£β± π€Ώ *γSeu XPγ* : ${getLevelingXp(sender)}
β
β£β± π *γCreditosγ* : +50
β
β£β± βοΈ *γTituloγ*: ${role}
β
ββ± π *γLevelγ* : ${getLevel} β±π ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*${pushname} β Seus creditos sΓ£o insuficientes β*`
}

exports.limitcount = (limitCounts) => {
	return`
*γ π Seus Creditos π γ*

*π Quantidade de Creditos π* : 
π§§π§§π§§π§§π§§π§§ ${limitCounts}

*β οΈ Consiga creditos comprando, subindo de level ou com o criador β οΈ*`
}

exports.satukos = () => {
	return`*π― Use o comando junto do 1 / ativar ou 0 / desativar π―*`
}

exports.uangkau = (pushname, sender, uangkau, senti, role, aliansa, getLevelingLevel, emotion, point, rankss, crimi, aventure) => {
	return`*ββββββββββββββ*\n      π πππ π²πππππ      *${senti}*\n*ββββββββββββββ*\n\nβ£β± π *Pontos De Evento* : ${rankss}\nβ£β± π« *Pontos De Crimes* : ${crimi}\nβ£β± πͺ΅ *Pontos De Aventuras* : ${aventure}\n\nβ£β± π‘οΈ *ClΓ£* : ${aliansa}\nβ£β± π *Titulo* : ${role}\nβ£β± π *Emoji* : ${emotion}\n\nβ£β± π¨ *Contador De MSG* : ${point}\n\nβ£β± πΉ *Nome* : ${pushname}\nβ£β± πΈ *Dinheiro* : *${uangkau}*\nβ£β± β *Level* : ${getLevelingLevel(sender)} π?\n\n π₯ ππ²πΊπΎπ? ππΈ π£πΈπΉπΈ ππΈπΌ π‘πͺπ·π΄πΌ, π’π?π·π­πΈ ππ½π²πΏπΈ ππΈ ππ»πΎπΉπΈ π₯`
}

exports.afkOn = (pushname, reason) => {
    return `Recurso AFK Bem Sucedido!\n\nβΈ *Nome*: ${pushname}\nβΈ *RazΓ£o*: ${reason}`
}

exports.afkOnAlready = () => {
    return `O Recurso afk foi ativado de antemΓ£o.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*γ AFK MODE γ*\n\nSssttt! A pessoa esta AFK nΓ£o se preocupe\nβΈ *RazΓ£o*: ${getReason}\nβΈ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* Voltou afk bem vindo de volta`
}

exports.left = (num) => {
	return`*Aah Que Pena  @${num.split('@')[0]} *Saiu do Grupo*`
}

exports.welcome = ( mdata , num ) => {
	return`*OlΓ‘ @${num.split('@')[0]}*\n\n*Bem vindo ao grupo*\n\n*${mdata.subject}*\n\nπ§π·β¬ sα΄α΄α΄ Κα΄α΄ α΄ ΙͺΙ΄α΄α΄ (α΄)β¬π―π΅\nπ? sα΄ Ια΄Κα΄sα΄Ι΄α΄α΄ α΄α΄α΄: (obrigΙtΓ³rio)\nβ¦Nome(real):\nβ IdΙde: \n\nβ¦ *SΓ³ fique no grupo se for ser ativo*\n\nβ Foto (opcionΙl)\n\nπ§§ Regras na descriΓ§Γ£o\n`
}

exports.banadd = (pnom3) => {
	return`*γπΊ Voce Morreu πΊγ*

*Nome* : ${pnom3}`
}

exports.dellban = (hnom3) => {
	return`*γπ Voce Ressuscitouπγ*

*Nome* : ${hnom3}
*ExpiraΓ§Γ£o* : π―π΅π§π·\n\n*βοΈ Voltou βοΈ*`
}

exports.benned = () => {
	return`*γVoce esta morto, Se Ressuscita Ou Pede Para Alguem te Ressuscitarγ*`
}

exports.matador = () => {
	return`*γVoce esta morto espere ser ressuscitadoγ*`
}