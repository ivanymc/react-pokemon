import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 

        <Container maxWidth="xl" className="not-found">        
            <h2> Sorry </h2>
            <p> This page Can't be found.</p>
            <Link to="/"> Back to Home </Link>
        </Container>
     );
}
 
export default NotFound;