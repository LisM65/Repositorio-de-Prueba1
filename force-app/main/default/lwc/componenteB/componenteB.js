import { LightningElement, track } from 'lwc';

export default class ComponenteB extends LightningElement {
    @track benefits;

    connectedCallback() {
        const data = {
            "benefitsList": [
                {
                    "cod": "B001",
                    "name": "Titulo beneficio 1",
                    "descripcion": "fnsiubguisgosmdogvmdgkvndvndfkngvdknvldkfbldkmfgblkdnflbndlkfbdlfkbld"
                },
                {
                    "cod": "B002",
                    "name": "Titulo beneficio 2",
                    "descripcion": "fnsiubguisgosmdogvmdgkvndvndfkngvdknvldkfbldkmfgblkdnflbndlkfbdlfkbld"
                },
                {
                    "cod": "B003",
                    "name": "Titulo beneficio 3",
                    "descripcion": "fnsiubguisgosmdogvmdgkvndvndfkngvdknvldkfbldkmfgblkdnflbndlkfbdlfkbld"
                },
                {
                    "cod": "B004",
                    "name": "Titulo beneficio 4",
                    "descripcion": "fnsiubguisgosmdogvmdgkvndvndfkngvdknvldkfbldkmfgblkdnflbndlkfbdlfkbld"
                }
            ]
        };

        //this.benefits = data.benefitsList;
        this.benefits = data.benefitsList.map((item, index) => ({
            ...item,
            numero: index + 1,
            tituloNumerado: `${index + 1}. ${item.name}`
        }));
    }
}
