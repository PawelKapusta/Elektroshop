const initialState = {
  products: [
    {
      id: 1,
      name: 'Fifine Confait',
      image:
        'https://images.unsplash.com/photo-1550520920-27ba45c38740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description:
        'A laptop computer is a small personal computer. They are designed to be more portable than traditional desktop computers, with many of the same abilities. Laptops are able to be folded flat for transportation and have a built-in keyboard and touchpad.',
      price: 3225.0,
      category: 'computer',
      quantity: 12,
    },
    {
      id: 2,
      name: 'Colman Daffey',
      image:
        'https://images.unsplash.com/photo-1600478822888-e3d96cdc8ae2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description:
        'A computer keyboard is an input device used to enter characters and functions into the computer system by pressing buttons, or keys. It is the primary device used to enter text. A keyboard typically contains keys for individual letters, numbers and special characters, as well as keys for specific functions.',
      price: 4107.9,
      category: 'keyboard',
      quantity: 21,
    },
    {
      id: 3,
      name: 'Alexio Terbrugge',
      image:
        'https://images.unsplash.com/photo-1599518532481-301fb4d411c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      description:
        'A mobile phone (also known as a hand phone, cell phone, or cellular telephone) is a small portable radio telephone. The mobile phone can be used to communicate over long distances without wires. It works by communicating with a nearby base station (also called a "cell site") which connects it to the main phone network.',
      price: 1589.9,
      category: 'phone',
      quantity: 11,
    },
    {
      id: 4,
      name: 'Rachel Couchman',
      image:
        'https://images.unsplash.com/photo-1605406993610-0d12ba1df451?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      description: 'Acute eczematoid otitis externa, left ear',
      price: 3784.3,
      category: 'phone',
      quantity: 43,
    },
    {
      id: 5,
      name: 'Glen Over',
      image:
        'https://images.unsplash.com/photo-1560529870-1efc5a43990f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
      description:
        'A mobile phone (also known as a hand phone, cell phone, or cellular telephone) is a small portable radio telephone. The mobile phone can be used to communicate over long distances without wires. It works by communicating with a nearby base station (also called a "cell site") which connects it to the main phone network.',
      price: 2129.3,
      category: 'phone',
      quantity: 123,
    },
    {
      id: 6,
      name: 'Jessee Handley',
      image:
        'https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80 ',
      description:
        'A computer monitor is an output device that displays information in pictorial form. A monitor usually comprises the visual display, circuitry, casing, and power supply. The display device in modern monitors is typically a thin film transistor liquid crystal display (TFT-LCD) with LED backlighting having replaced cold-cathode fluorescent lamp (CCFL) backlighting. Older monitors used a cathode ray tube (CRT). Monitors are connected to the computer via VGA, Digital Visual Interface (DVI), HDMI, DisplayPort, Thunderbolt, low-voltage differential signaling (LVDS) or other proprietary connectors and signals.',
      price: 780.7,
      category: 'monitor',
      quantity: 32,
    },
    {
      id: 7,
      name: 'Thelma Walkling',
      image:
        'https://images.unsplash.com/photo-1542487354-feaf93476caa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=658&q=80',
      description:
        'A computer monitor is an output device that displays information in pictorial form. A monitor usually comprises the visual display, circuitry, casing, and power supply. The display device in modern monitors is typically a thin film transistor liquid crystal display (TFT-LCD) with LED backlighting having replaced cold-cathode fluorescent lamp (CCFL) backlighting. Older monitors used a cathode ray tube (CRT). Monitors are connected to the computer via VGA, Digital Visual Interface (DVI), HDMI, DisplayPort, Thunderbolt, low-voltage differential signaling (LVDS) or other proprietary connectors and signals.',
      price: 3635.6,
      category: 'monitor',
      quantity: 1,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state, action.payload.product],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: [...state].filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
