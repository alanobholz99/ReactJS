import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const CardWidget = () => {
    const [count, setCount] = useState(0)
    const handlerIncremento = () => {
        setCount (count + 1)
    }
    return (
        

<div>
<Container onClick={handlerIncremento}  >
<Row>
<Col >
<Image src="./public/asets/compras.png"
  />
 <p>{count}</p>
</Col>
</Row>
</Container>

</div>

    );
}

export default CardWidget;
