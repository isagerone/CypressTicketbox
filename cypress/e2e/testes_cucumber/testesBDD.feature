#language:pt

Funcionalidade: Compra de tickets no Ticketbox

  Cenario: Compra de 1 ticket General Admission com opção Friend
    Dado acesso à página Ticketbox
    E preencho o formulário com "Teste", "da Silva", "teste@teste.gamil.com"
    E seleciono "1" em Ticket Quantity, a opcao "#general" em Ticket Type e "#friend" em como conheci o evento
    E marco I Agree
    Quando clico em Confirm Tickets
    Entao a compra é confirmada com sucesso

  Cenario: Compra de 2 tickets VIP com opção Publication
    Dado acesso à página Ticketbox
    E preencho o formulário com "Teste", "da Silva", "teste@teste.gamil.com"
    E seleciono "2" em Ticket Quantity, a opcao "#vip" em Ticket Type e "#publication" em como conheci o evento
    E marco I Agree
    Quando clico em Confirm Tickets
    Entao a compra é confirmada com sucesso

  Cenario: Compra de 3 ticket do tipo VIP usando a opção Social Media
    Dado acesso à página Ticketbox
    E preencho o formulário com "Teste", "da Silva", "teste@teste.gamil.com"
    E seleciono "3" em Ticket Quantity, a opcao "#vip" em Ticket Type e "#social-media" em como conheci o evento
    E marco I Agree
    Quando clico em Confirm Tickets
    Entao a compra é confirmada com sucesso

  Cenario: Compra de 4 ticket do tipo General Admission usando a opção Publication
    Dado acesso à página Ticketbox
    E preencho o formulário com "Teste", "da Silva", "teste@teste.gamil.com"
    E seleciono "4" em Ticket Quantity, a opcao "#general" em Ticket Type e "#publication" em como conheci o evento
    E marco I Agree
    Quando clico em Confirm Tickets
    Entao a compra é confirmada com sucesso

  Cenario: Testa o botão Reset
    Dado acesso à página Ticketbox
    E preencho o formulário com "Teste", "da Silva", "teste@teste.gamil.com"
    E seleciono "1" em Ticket Quantity, a opcao "#general" em Ticket Type e "#friend" em como conheci o evento
    Quando clico no botão Reset
    Entao todos os campos estão limpos