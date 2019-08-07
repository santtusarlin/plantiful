export class About {
    viesti: string = "This is a demo version of the application made by students at JAMK University of Applied Sciences as a part of the Ticorporate demo lab, during which students are to develop a working demo version of a product in three months. Plantiful is a mood diary, which emphasizes on the visual side of viewing data. Each diary entry adds a new part to a plant based on their mood entry, which then develops to be different to every user. They can scroll the plant and view it as a timeline of their past moods. The product is not yet final and is still very much a demo version of the application, but it includes the core features. Thank you for your interest in our product!"

    getMessage() {
        return this.viesti;
    }
}