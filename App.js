import React , {useState , useEffect }  from 'react';
import { Container  , Row , Col , Card ,  Button } from 'react-bootstrap';
import Header from './Navbar' ;
import VendingMachine from './components/VM-calculator'


const App = () => {

  const [vm, setVM] = useState({});
  const [datas, setData] = useState({});
  const [namedrik, setNamedrik] = useState("");
  const [coin , setCoin] = useState(0);
  const [id , setid] = useState(false);

  // ค้นหาของผ่าน id
  const select = (pid) => {
    return vm.select(pid);
  }

  // เช็คเงินกับราคาของ
  const calculator = (coin,pid) => {
    let back = vm.calculator(coin,pid);
    if(back === "resetid"){
      setid(false);
      setNamedrik("");
      return 0 ; 
    }else{
      return coin ;
    }
    
  }
  
  // คืนเงิน
  const cancelcoin = (coins) =>{
    let back = vm.cancelcoin(coins);
    setNamedrik("");
    return back;
  }

  //โหลด Json file ผ่าน Path
  useEffect( () => {
    fetch("https://www.mocky.io/v2/5c77c5b330000051009d64c9")
    .then(function (response) {
      return response.json() // แปลงข้อมูลที่ได้เป็น json
    })
    .then(function (data) {
      setData(data.data);
      setVM(VendingMachine(data.data));
    })
  }, []);


  return (
    <div>
    <Header/>
  
      <Container className="mt-4">
        <Row className="justify-content-md-center"  >

          {/* เลือกของ */}   
          <Col xs={12} md={8} xl={8} lg={8} >
            <Card className="mb-3">
            <Card.Header>เครื่องดื่ม</Card.Header>
            <Container>
              <Row className="justify-content-md-center">
                {Object.keys(datas).map(d => {
                  return(
                    <Card className="mt-2 mb-2 mr-1 ml-1" style={{ width: '10rem'  }} > 
                      <Card.Img variant="top" src={datas[d].image} style={{ width: '10rem' , height: '8rem' }} />
                      <Card.Body>
                        <Card.Title>{datas[d].name}</Card.Title>
                      </Card.Body>
                      <Button variant="dark" name={datas[d].name} key={d} id={d} value={datas[d].name} onClick={e => {
                        setid(e.target.id);
                        setNamedrik(select(e.target.id));
                        setCoin(calculator(coin,e.target.id));
                      }}>ราคา : {datas[d].price} บาท</Button>
                    </Card> 
                  )})
                }
              </Row>
            </Container>
            </Card>
          </Col>

          {/* หยอดเหรียญ */}
          <Col xs={12} md={3} xl={3} lg={3}>
            <Card>
            <Card.Header>หยอดเหรียญ</Card.Header>
            <Container>
              <Row className="justify-content-md-center">
                <Button className="mt-3 mr-1 ml-2 mb-2 " id='1' value='1' onClick={e =>{
                  setCoin(parseInt(coin)+parseInt(e.target.value));
                  if(id !== false)
                    setCoin(calculator(parseInt(coin)+parseInt(e.target.value),id));
                }} variant="secondary" >1 บาท</Button>
                <Button className="mt-3 mr-2 ml-2 mb-2 " id='2' value='2' onClick={e =>{
                  setCoin(parseInt(coin)+parseInt(e.target.value));
                  if(id !== false)
                    setCoin(calculator(parseInt(coin)+parseInt(e.target.value),id));
                }} variant="secondary" >2 บาท</Button>
                <Button className="mt-3 mr-2 ml-2 mb-2 " id='5' value='5' onClick={e =>{
                  setCoin(parseInt(coin)+parseInt(e.target.value));
                  if(id !== false)
                    setCoin(calculator(parseInt(coin)+parseInt(e.target.value),id));
                }} variant="secondary">5 บาท</Button>
                <Button className="mt-3 mr-1 ml-2 mb-2" id='10' value='10' onClick={e =>{
                  setCoin(parseInt(coin)+parseInt(e.target.value));
                  if(id !== false)
                    setCoin(calculator(parseInt(coin)+parseInt(e.target.value),id));
                }} variant="secondary">10 บาท</Button>
              </Row >
                เลือกเครื่องดื่ม : {namedrik}
                <br/>
                เงินรวม : {coin}
              <Row className="justify-content-md-center">
                <Button className="mt-3 mr-2 ml-2 mb-3" id='resetcoin' onClick={e =>{
                  setCoin(cancelcoin(coin));
                }} variant="secondary">คืนเงิน</Button>
              </Row>
            </Container>
            
            {/* คู่มือ  */}
            </Card>
            <Card className="mt-3">
              <Card.Header>คู่มือการใช้งาน</Card.Header>
              <Card.Body>
                  <center>
                    1.เลือกเครื่องดื่ม
                    <br/>
                    2.หยอดเหรียญ
                    <br/>
                    หรือ
                    <br/>
                    1.หยอดเหรียญ
                    <br/>
                    2.เลือกเครื่องดื่ม
                  </center>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
      
    </div>
  );
}

export default App;

