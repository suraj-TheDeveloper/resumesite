import React from "react";

// reactstrap components
import { 
    Container, 
} from "reactstrap";  

class Projects extends React.Component {
    render() {
        return (
            <>
                <div id="projects" className="section section-components pb-0">
                    <Container>
                        <h2 className="mb-5">Projects</h2>
                        <div>
                            <h5>1. Billing System</h5>
                            <h6>Tools: Backend(PHP), Database(MySQL), Frontend(HTML, CSS, JavaScript)</h6>
                            <h6>Role: PHP Developer</h6>
                            <p>
                                This project is developed to manage the bills and the stocks of the products sold 
                                in that shop. This software stores the product details and its stock and then generates 
                                the bill according to products purchased by the customer.
                            </p>
                        </div>
                        <div>
                            <h5>2. Electronic Shelf Label(ESL)</h5>
                            <h6>Tools: Backend(Node JS), Database(MongoDB), Frontend(React Js), Hardware communication(MQTT)</h6>
                            <h6>Role: Backend Developer</h6>
                            <p>
                                This project is developed to manage the daily rates of the product sold in the supermarket. 
                                The ESL hardware will be fitted on the rack to display the product name, price and stock, 
                                this will be connected to the gateway fitted in that area which is connected to the cloud 
                                with the help of MQTT. when any changes are made it will be reflected in the particular ESL.
                            </p>
                        </div>
                        <div>
                            <h5>3. Asset Tracking</h5>
                            <h6>Tools: Backend(Node JS), Database(MongoDB), Frontend(React Js), Hardware communication(MQTT)</h6>
                            <h6>Role: Backend Developer</h6>
                            <p>
                                This project is developed to track and manage the assets in any type of industry in three ways 
                                (Live, Location and Timeline) tracking. The tracking is done with the help of a gateway fitted in 
                                the floor/room connected to the cloud and the tag is attached to the asset. Login to the cloud and 
                                choose the live tracking option in the tracking menu. Select the asset you want to track live and 
                                the asset will appear in the floor layout. In location tracking select the location in the layout. 
                                The table appears and shows the list of assets in that location. In timeline tracking select the 
                                asset a table appears and shows where the asset has traveled so far.
                            </p>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}

export default Projects