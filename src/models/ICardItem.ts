interface ICardItem {
    id: number;
    title: string;
    description?: string;
    price: number;
    image: string;

    // constructor(id:number, title: string, description: string, price: number, image: string){
    //     this.id = id;
    //     this.title = title;
    //     this.description = description;
    //     this.price = price;
    //     this.image
    // }
}


export default ICardItem;