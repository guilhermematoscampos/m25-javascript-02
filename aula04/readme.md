/app/ inkscape - desenhos vetoriais

ctrl + d - seleciona multiplos iguais
ctrl + ; - cria comentario
alt + shit + ↓ - cria cópia
alt + shit + f - organiza
(no chrome) f12 - abre modo dev

final
html
  -formatação
  espaço adicionado apenas uma vez a não ser que um caracter especial seja usado
  &nbsp; - no break space - adiciona mais que um espaço
  <p> </p> - paragrafo
  <h1>  </h1> - titulo (numero maior, letra menor)
  <b>  </b> - negrito
  <i>  </i> - italico
  <strike>  </strike> - riscado
  <u>  </u> - sublinhado
  <mark>  </mark> - marcado

  -listas
  <section id="salami"> conteudo </section> - cria seção
  <header> </header> - nome da seção
  <ol start="valor_inicial" type="tipo">  </ol> - lista ordenada (start determina o valor inicial e type determina a forma de numeração)
  <ul>  </ul> - lista não ordenada
  <li>  </li> - item de uma lista
  lista dentro de lista cria sub-items

  -link
  <a href="link">  </a> - cria link (#no final do link leva a uma seção específica, #sem o link leva a uma seção do próprio site)

  -midia
  <figure>  </figure> - imagem com legenda
  <img> - imagem
  <figcaption> </figcaption> - legenda

  <video src="link">  </video> - poe video
  <video controls> <source src="link"> </video> - video com controles

  <audio src="link">  </audio> - poe audio
  <audio controls> <source src="link" type="tipo"> </audio> - audio com controles

  -tabela
  <table border="valor">
    <thead> 
      <tr> 
        <th></th> - cria coluna
      </tr> - cria linha
    </thead> - cabeçalho
    <tbody>
        <tr>
            <td></td> - cria coluna
        </tr> - cria linha
    </tbody> - cria corpo
    <tfoot>
        <tr>
            <td colspan="valor"></td> - cria coluna (colspan mescla colunas)
        </tr> - cria linha
    </tfoot> - cria cabeçalho
  </table> - cria tabela (border cria valor)

  -formulario
  <form action="link to server" method="metodo">    
    ... (ver codigo)
  </form> - cria formulario (metodo: get- mostra os campos (n usado para dados perigosos). post- esconde os campos (mais usado))

  -semantica
    <header>Cabeçalho</header>
    <main>Conteúdo principal</main>
    <section>Seção</section>
    <article>Artigo</article>
    <aside>Lateral</aside>
    <footer>Rodapé</footer>

  -conteudo embutido
    <iframe></iframe> - põe video ou página externa (como um "mini navegador")
    <canvas></canvas> - permite desenhar (requer javascript)
    <svg width="" height=""> parametros </svg> - desenha usando o html

  -programação (sempre no final, depende do conteudo estático)
    <script>  </script> - põe javascript
    <noscript>  </noscript> - mensagem caso o navegador n aceite o script
    <template>
      <p>  </p>
    </template> - conteudo n renderizado no carregamento?
  
css 
  # -> id
  . -> classe