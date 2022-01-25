import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Cards'
import { Col, Container, Row } from 'react-bootstrap'
import useFetch from 'react-fetch-hook'


function Weather(props) {
    let option1 = {
        weekday: 'long',
      }
      let option2 = {
        month: 'long',
        day: 'numeric',
      }

    
      const { isLoading, data, error } = useFetch(
        "https://api.openweathermap.org/data/2.5/forecast?q="+props.city+"&appid={YOUR API KEY}&units=metric#",
      )
      if (error) {
        return <div>
          <p>Code: ${error.status}</p>
          <p>Message: ${error.statusText}</p>
        </div>
      }
      else{
      return isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Container>
            <Row>
              <Col lg={1}/>
              <Col lg={2}>
                <Cards
                title={new Date( data.list[0].dt_txt).toLocaleDateString('en-US', option1)}
                subTitle={new Date( data.list[0].dt_txt).toLocaleDateString('en-US', option2)}
                img={('http://openweathermap.org/img/wn/' +  data.list[0].weather[0].icon + '@2x.png')}
                temp={data.list[0].main.temp}
       
                />
              </Col>
              <Col lg={2}>
                <Cards
                title={new Date( data.list[5].dt_txt).toLocaleDateString('en-US', option1)}
                subTitle={new Date( data.list[5].dt_txt).toLocaleDateString('en-US', option2)}
                img={('http://openweathermap.org/img/wn/' +  data.list[2].weather[0].icon + '@2x.png')}
                temp={data.list[10].main.temp}
          
                />
              </Col>
             
              <Col lg={2}>
                <Cards
                title={new Date( data.list[15].dt_txt).toLocaleDateString('en-US', option1)}
                subTitle={new Date( data.list[15].dt_txt).toLocaleDateString('en-US', option2)}
                img={('http://openweathermap.org/img/wn/' +  data.list[19].weather[0].icon + '@2x.png')}
                temp={data.list[19].main.temp}
  
                />
              </Col>
              <Col lg={2}>
                <Cards
                title={new Date( data.list[25].dt_txt).toLocaleDateString('en-US', option1)}
                subTitle={new Date( data.list[25].dt_txt).toLocaleDateString('en-US', option2)}
                img={('http://openweathermap.org/img/wn/' +  data.list[27].weather[0].icon + '@2x.png')}
                temp={data.list[5].main.temp}
           
                />
              </Col>
              <Col lg={2}>
                <Cards
                title={new Date( data.list[29].dt_txt).toLocaleDateString('en-US', option1)}
                subTitle={new Date( data.list[29].dt_txt).toLocaleDateString('en-US', option2)}
                img={('http://openweathermap.org/img/wn/' +  data.list[27].weather[0].icon + '@2x.png')}
                temp={data.list[27].main.temp}
               
                />
              </Col>
              <Col lg={1}/>       
            </Row>
          </Container>
        </div>
      )
      }

  
}

export default Weather;
