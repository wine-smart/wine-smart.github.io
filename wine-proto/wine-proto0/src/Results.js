import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardDeck, Navbar, Nav, Image} from 'react-bootstrap';

var firstChoice = '';
var secondChoice = '';
var thirdChoice = '';

class Results extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            expense: "",
            chosenAnswers: ""
        }
    }

    findWine1() {   
        this.state.chosenAnswers = this.props.location.state;
        this.state.expense = this.state.chosenAnswers.chosenAnswers[0].answer;
        if(this.state.chosenAnswers.chosenAnswers[1].answer === "NotSweet"){
             //red wine here
             if(this.state.chosenAnswers.chosenAnswers[2].answer === "Beer"){
                 //low alc content
                if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = 'Merlot'
                    secondChoice = 'Shiraz'
                    thirdChoice = 'Cabernet Sauvigon'
                } else {
                    //low acitidty
                    firstChoice = "Shiraz"
                    secondChoice = "Merlot"
                    thirdChoice = "Cabernet Sauvignon"
                }
             }else if(this.state.chosenAnswers.chosenAnswers[2].answer === "Marg"){
                 //med alc content
                 if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = "Cabernet Sauvignon"
                    secondChoice = "Merlot"
                    thirdChoice = "Shiraz"
                 } else {
                    //low acitidty
                    firstChoice = "Cabernet Sauvignon"
                    secondChoice = "Shiraz"
                    thirdChoice = "Merlot"
                 }
             }else {
                 //high alc content
                 if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = "Shiraz"
                    secondChoice = "Merlot"
                    thirdChoice = "Cabernet Sauvignon"
                 } else {
                    //low acitidty
                    firstChoice = "Shiraz"
                    secondChoice = "Cabernet Sauvignon"
                    thirdChoice = "Merlot"
                 }
             }
        }else if (this.state.chosenAnswers.chosenAnswers[1].answer === "Sweet"){
             //white wine here
             if(this.state.chosenAnswers.chosenAnswers[2].answer === "Beer"){
                 //low alc content
                 if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = "Moscato"
                    secondChoice = "Pinot Grigio"
                    thirdChoice = "Chardonnay"
                 } else {
                    //low acitidty
                    firstChoice = "Moscato"
                    secondChoice = "Sauvignon Blanc"
                    thirdChoice = "Chardonnay"
                 }
             }else if(this.state.chosenAnswers.chosenAnswers[2].answer === "Marg"){
                 //med alc content
                 if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = "Pinot Grigio"
                    secondChoice = "Chardonnay"
                    thirdChoice = "Sauvignon Blanc"
                 } else {
                    //low acitidty
                    firstChoice = "Pinot Grigio"
                    secondChoice = "Chardonnay"
                    thirdChoice = "Moscato"
                 }
             }else {
                 //high alc content
                 if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = "Sauvignon Blanc"
                    secondChoice = "Chardonnay"
                    thirdChoice = "Pinot Grigio"
                 } else {
                    //low acitidty
                    firstChoice = "Sauvignon Blanc"
                    secondChoice = "Chardonnay"
                    thirdChoice = "Moscato"
                 }
             }
        }else {
             //either
             if(this.state.chosenAnswers.chosenAnswers[2].answer === "Beer"){
                 //low alc content
                 if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = "Sangria"
                    secondChoice = "Moscato"
                    thirdChoice = "Rose"
                 } else {
                    //low acitidty
                    firstChoice = "Sangria"
                    secondChoice = "Moscato"
                    thirdChoice = "Rose"
                 }
             }else if(this.state.chosenAnswers.chosenAnswers[2].answer === "Marg"){
                 //med alc content
                 if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = "White Zinfandel"
                    secondChoice = "Rose"
                    thirdChoice = "Moscato"
                 } else {
                    //low acitidty
                    firstChoice = "White Zinfandel"
                    secondChoice = "Sangria"
                    thirdChoice = "Moscato"
                 }
             }else {
                 //high alc content
                 if (this.state.chosenAnswers.chosenAnswers[4].answer === "Sour"){
                    //high acitidity
                    firstChoice = "White Zinfandel"
                    secondChoice = "Rose"
                    thirdChoice = "Moscato"
                 } 
             }
        }
     }

    getShiraz(){
        let img = "https://www.aldi.us/fileadmin/_processed_/b/a/csm_winking-owl-shiraz-wine-desktop_91596e4e2e.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-shiraz/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://images.vivino.com/thumbs/qMM4cuzGQzeMrOFRsP2lpg_pb_x600.png"
            link = "https://www.vivino.com/penfolds-bin-28-kalimna-shiraz/w/1244?year=2015&price_id=14869784&change_ship_to_country_code=us&change_ship_to_state_code=CA"
            price = "36.99"
        } else if (this.state.expense === "Expensive"){
            img = "https://cdn11.bigcommerce.com/s-4revryn/images/stencil/2048x2048/products/4443/8647/Mollydooker-Velvet-Glove-299x600__66489.1607018984.jpg?c=2"
            link = "https://drinkdispatch.com/mollydooker-velvet-glove-shiraz-2018/?utm_source=google&utm_medium=cpc&adpos=&scid=scplp4443&sc_intid=4443&gclid=CjwKCAjwjbCDBhAwEiwAiudByyOReS3Ik6uIgLsKXL5JgwbL0m1E8r7C4ym-rBHrBehc9pzY0eSkuxoCoqYQAvD_BwE"
            price = "180.00"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Shiraz</Card.Title>
                       <Card.Text>Dry. Bold. 14-15.5%. Firm Tannins. Blueberry and Blackberry notes. Serve chilled. Pairs with hearty stews, duck and mushrooms.</Card.Text>
                       <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getCabernetSauvignon(){
        let img = "https://www.aldi.us/fileadmin/_processed_/a/2/csm_111115_R_45214_WinkingOwl_CabernetSauvignon_D_87e9c42977.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-cabernet-sauvignon/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://www.wine.com/product/images/w_768,h_3018,c_fit,q_auto:good,fl_progressive/enmic4r05wunwcqcdkx8.jpg"
            link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-cabernet-sauvignon/"
            price = "56.99"
        } else if (this.state.expense === "Expensive"){
            img = "https://mk0silveroakd4bbt7jc.kinstacdn.com/wp-content/uploads/shop/product-images/5fc8135225b7080a420e99bd.png"
            link = "https://silveroak.com/shop/p/2016-napa-valley-cabernet-sauvignon/?gclid=CjwKCAjwjbCDBhAwEiwAiudBy8u9_R876mP0ajpZTQwb_0xXuaz9aYR6prC9g5lcIDPSNUPJgX7CiRoCKpQQAvD_BwE"
            price = "125.00"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Cabernet Sauvignon</Card.Title>
                       <Card.Text>Dry. Full-Bodied. 13.5-15%. Healthy Tannins. Serve chilled. Pairs with red meats, truffles.</Card.Text>
                       <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getMerlot(){
        let img = "https://www.aldi.us/fileadmin/_processed_/4/d/csm_winking-owl-merlot-wine-desktop_8729c60e3a.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-merlot/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://www.wine.com/product/images/w_768,h_3113,c_fit,q_auto:good,fl_progressive/maflcy5x1larxemrhd9b.jpg"
            link = "https://www.wine.com/product/merryvale-merlot-2015/354338?state=CA&s=GoogleBase_CSE_354338_PSNEW21_type_Wine_RedWine_Merlot_10913&region_id=000003"
            price = "47.99"
        } else if (this.state.expense === "Expensive"){
            img = "https://cdn11.bigcommerce.com/s-i6031ho5me/images/stencil/1000x1000/products/4609/5197/1135658x__47632.1611182819.jpg?c=2"
            link = "https://www.estatewinebrokers.com/pahlmeyer-merlot-napa-valley-2006-750ml/?gclid=CjwKCAjwjbCDBhAwEiwAiudBy-CKQUyd4nvozxNUc9yPcQQ99naAotwRhKKmxRP7k2VlZxFhlanpiBoCwhkQAvD_BwE"
            price = "95.00"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Merlot</Card.Title>
                       <Card.Text>Dry. Medium-Bodied. 13-14%. Serve chilled. Pairs with light meats and savory dishes.</Card.Text>
                       <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getPinotGrigio(){
        let img = "https://www.aldi.us/fileadmin/_processed_/0/f/csm_winking-owl-pinot-grigio-wine-desktop_becd9d6c99.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/white-wine/detail/ps/p/winking-owl-pinot-grigio/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://d2d8wwwkmhfcva.cloudfront.net/500x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ff671a05-933a-4c3a-982d-0820dcb26920.png"
            link = "https://www.instacart.com/landing?product_id=17313984&utm_term=pbi-0&utm_campaign=pinot-grigio-2016_hmart&utm_source=instacart_google&utm_medium=shopping_free_listing&utm_content=productid-17313984_retailerid=119&zipcode_guess=61820"
            price = "32.99"
        } else if (this.state.expense === "Expensive"){
            img = "https://www.wine-searcher.com/images/labels/71/59/10977159.jpg?width=466&height=400&fit=bounds"
            link = "https://www.wine-searcher.com/find/dom+zind+humbrecht+pinot+gris+clos+jebsal+alsace+france"
            price = "147.00"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Pinot Grigio</Card.Title>
                       <Card.Text>Dry to Semi-Sweet. Medium-Bodied. 12.5-14.5%. Serve chilled. Lemon and pear notes. Pairs with nuts, olives, cheeses.</Card.Text>
                       <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getChardonnay(){
        let img = "https://www.aldi.us/fileadmin/_processed_/a/5/csm_winking-owl-chardonnay-wine-desktop_69de96579e.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/white-wine/detail/ps/p/winking-owl-chardonnay/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://images.vivino.com/thumbs/nIvy8ALtS7SibQ8g_NJpsw_pb_x600.png"
            link = "https://www.vivino.com/cakebread-chardonnay-napa-valley/w/740?year=2018&price_id=20409975"
            price = "42.99"
        } else if (this.state.expense === "Expensive"){
            img = "https://cdn11.bigcommerce.com/s-i6031ho5me/images/stencil/1000x1000/products/4545/5129/1077295x__34309.1611167825.jpg?c=2"
            link = "https://www.estatewinebrokers.com/aubert-chardonnay-ritchie-vineyard-2009-750ml/?gclid=CjwKCAjwjbCDBhAwEiwAiudBy2FehtLAt5DEcotvPyz7EBNVWKrg3VbzD8wEhxXSpYO4PRANS4E7vxoCRboQAvD_BwE"
            price = "150.00"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Chardonnay</Card.Title>
                       <Card.Text>Dry to Semi-Sweet. Medium-Bodied. 13.5-14.5%. Serve room temperature. Pairs with seafood.</Card.Text>
                       <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getSauvignonBlanc(){
        let img = "https://www.aldi.us/fileadmin/_processed_/6/6/csm_winking-owl-sauvignon-blanc-wine-desktop_14272e8db7.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/white-wine/detail/ps/p/winking-owl-sauvignon-blanc/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://www.wine.com/product/images/w_768,h_2650,c_fit,q_auto:good,fl_progressive/anvxs61svjqkzxxyzrpl.jpg"
            link = "https://www.wine.com/product/spottswoode-sauvignon-blanc-2019/623598"
            price = "47.99"
        } else if (this.state.expense === "Expensive"){
            img = "https://www.wine.com/product/images/w_480,h_600,c_fit,q_auto:good,fl_progressive/wd9kqvlnd48zpktwl1g8.jpg"
            link = "https://www.wine.com/product/gaja-alteni-di-brassica-sauvignon-blanc-2017/578743?state=CA&s=GoogleBase_CSE_578743_PSNEW21_type_Wine_WhiteWine_SauvignonBlanc_1990&region_id=000003&utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=Google_Shopping_Smart_Wine&showpromo=true&promo=PSNEW21&gclid=CjwKCAjwjbCDBhAwEiwAiudBywQ0ViTHRKXhERDjohdM7EvKFWvlIMcJQ7MsIgkma7nziOGa2leXbBoCnYgQAvD_BwE&gclsrc=aw.ds#"
            price = "150.00"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                        <Card.Title>Sauvignon Blanc</Card.Title>
                           <Card.Text>Semi-Sweet to Sweet. Medium-Bodied. 14-14.5%. Serve chilled. Apple and peach notes. Pairs with green herbs and goat cheese.</Card.Text>
                           <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                    </Card.Body>
                </Card>
            )
        
    }
    getSangria(){
        let img = "https://www.aldi.us/fileadmin/_processed_/3/5/csm_winking-owl-sangria-wine-desktop_77ce67adb4.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/red-wine/detail/ps/p/winking-owl-sangria/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://www.liquorstore-online.com/product_images/p_116239_medium.jpg"
            link = "https://www.liquorstore-online.com/116239/madria-sangria-tradicional"
            price = "49.49"
        } else if (this.state.expense === "Expensive"){
            img = "https://cdn11.bigcommerce.com/s-hg93lnuu9r/images/stencil/1280x1280/products/17306/18036/de-la-costa-sangria-red-wine__00935.1591556000.jpg?c=2?imbypass=on"
            link = "https://www.napacabs.com/glunz-de-la-costa-sangria-red-wine-california-1l-12-pack.html?gclid=CjwKCAjwjbCDBhAwEiwAiudByyc1AOYK980_K_bm-UHnaITrlLoiQzmi-o1jW7npCIzgpMTfpunOohoCHKwQAvD_BwE"
            price = "149.98"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Sangria</Card.Title>
                       <Card.Text>Can be red or white. Can be sweetened to taste. Fruity. Serve chilled.</Card.Text>
                       <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getMoscato(){
        let img = "https://www.aldi.us/fileadmin/_processed_/9/a/csm_winking-owl-moscato-wine-desktop_4006a0a20e.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/white-wine/detail/ps/p/winking-owl-moscato/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://images.vivino.com/thumbs/MmsYEOxYQMupCQdh1LkvAg_pb_x600.png"
            link = "https://www.vivino.com/tenute-dettori-moscadeddu-badde-nigolosu/w/1237874?year=2015&price_id=23077606"
            price = "39.40"
        } else if (this.state.expense === "Expensive"){
            img = "https://www.liquorstore-online.com/product_images/p_65112_medium.jpg"
            link = "https://www.liquorstore-online.com/65112/moscato-dasti"
            price = "49.99"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Moscato</Card.Title>
                       <Card.Text>Sweet. 5-7%. Lemon and orange notes. Pairs with Thai and Vietnamese cuisine.</Card.Text>
                       <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getRose(){
        let img = "https://www.aldi.us/fileadmin/_processed_/c/2/csm_111115_R_45219_WinkingOwl_WhiteZinfandel_D_1f440f2c5a.jpg"
        let link = "https://www.aldi.us/en/products/alcohol/rose-wines/detail/ps/p/winking-owl-white-zinfandel/"
        let price = "2.95"
        if (this.state.expense === "Medium"){
            img = "https://www.liquorstore-online.com/product_images/p_98540_medium.jpg"
            link = "https://www.liquorstore-online.com/98540/five-oaks-white-zinfandel-nv"
            price = "55.99"
        } else if (this.state.expense === "Expensive"){
            img = "https://images.vivino.com/thumbs/iezL8575TZuw5tQ4Td6xRg_pb_x600.png"
            link = "https://www.vivino.com/kunde-estate-winery-and-vineyards-reserve-zinfandel-century-vines/w/1780684?year=2018"
            price = "139.99"
        }
        return (
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Rose/White Zinfandel</Card.Title>
                       <Card.Text>Sweet. 12.5%. Light Citrus notes.Pairs with smoked meats and pasta.</Card.Text>
                       <Card.Link href = {link}>Buy Now $({price})</Card.Link>
                </Card.Body>
            </Card>
        )
    }
    getWine(str){
        if(str === "Shiraz"){
            return this.getShiraz();
        }else if(str === "Merlot"){
            return this.getMerlot();
        }else if(str === "Cabernet Sauvignon"){
            return this.getCabernetSauvignon();
        }else if(str === "Pinot Grigio"){
            return this.getPinotGrigio();
        }else if(str === "Chardonnay"){
            return this.getChardonnay();
        }else if(str === "Sauvignon Blanc"){
            return this.getSauvignonBlanc();
        }else if(str === "Sangria"){
            return this.getSangria();
        }else if(str === "Moscato"){
            return this.getMoscato();
        }else if(str=== "Rose" || str === "White Zinfandel"){
            return this.getRose();
        }else {
            return this.getChardonnay();
        }
    }

    getResults(){
        this.findWine1()
        return (
            <>
            <p className = "results-text">Based on your responses, you might like the following wines:</p>
            <CardDeck className = "results-card">
                {this.getWine(firstChoice)}
                {this.getWine(secondChoice)}
                {this.getWine(thirdChoice)}
            </CardDeck>
            </>
        )
    }
    render() {
        return (
            <>
            <>
            <Navbar bg="light" variant="light">
                <Link to="/#home">
                    <Navbar.Brand href="#home">WineSmart</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
            
                <Link to="/#home">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Link to="/quiz1">
                <Nav.Link href="#features">Take the Quiz!</Nav.Link>
                </Link>
                <Link to="/results">
                <Nav.Link href="#recommendations">Recommendations</Nav.Link>
                </Link> 
                </Nav>
            </Navbar>
            </>
           
            <div>{this.getResults()}</div>
            
            </>
        )
    }
}
 export default Results;