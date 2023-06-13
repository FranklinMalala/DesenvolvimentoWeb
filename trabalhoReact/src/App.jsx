import React, { Component } from 'react';

class App extends Component {
  state = {
    produtos: [
      { id: 1,
        name: 'smartphone',
        isFavorito: false 
      },
      
      { id: 2,
        name: 'Televisao',
        isFavorito: false 
      },

      { id: 3,
        name: 'Fone de ouvido',
        isFavorito: false 
      },

      { id: 4,
        name: 'Monitor',
        isFavorito: false 
      },

      { id: 5,
        name: 'Teclado',
        isFavorito: false 
      },

      { id: 6,
        name: 'Mouse',
        isFavorito: false 
      },

      { id: 7,
        name: 'Gpu',
        isFavorito: false 
      },

      { id: 8,
        name: 'Processador',
        isFavorito: false 
      },

      { id: 9,
        name: 'Fonte Atx',
        isFavorito: false 
      },

      { id: 10,
        name: 'Roteador',
        isFavorito: false 
      },
     
      // adicione mais produtos conforme necessário
    ],
    buscaDeProduto: '',
  };

  handleChange = (e) => {
    this.setState({ buscaDeProduto: e.target.value });
  };

  handleFavorito = (id) => {
    this.setState((prevState) => {
      return {
        produtos: prevState.produtos.map((produto) => {
          if (produto.id === id) {
            produto.isFavorito = !produto.isFavorito;
          }
          return produto;
        }),
      };
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        produtos: prevState.produtos.filter((produto) => produto.id !== id),
      };
    });
  };

  render() {
    const { produtos, buscaDeProduto } = this.state;
    const produtosBuscados = produtos.filter((produto) =>
      produto.name.toLowerCase().includes(buscaDeProduto.toLowerCase())
    );

    return (
      <div style={{backgroundColor:'green' }}>
        <input
          type="search"
          placeholder="Buscar produtos"
          onChange={this.handleChange}
        />
        <ul style={{backgroundColor: 'aqua'}}>
          {produtosBuscados.map((produto) => (
            
            <li
              key={produto.id}
              style={{ color: produto.isFavorito ? 'red' : 'black', backgroundColor: 'brown'}}
            >
              <div>{produto.name}</div>
              
              <div>
                <button onClick={() => this.handleFavorito(produto.id) }>
                {produto.isFavorito ? 'Desfavoritar' : 'Favoritar'}
                </button>
              
              
              
                <button onClick={() => this.handleDelete(produto.id)}>
                Excluir
                </button>
              </div>
            
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
