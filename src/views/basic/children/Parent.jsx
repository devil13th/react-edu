import React from 'react'
import ChildrenComponent from './Children'
import Title from './Title'
class Parent extends React.Component{
    state = {
        a:1
    }

    render(){

        const cc = <div style={{border:"1px solid red"}}>ChildRen</div>
        return (
            <div>Parent
                <ChildrenComponent children="123456">
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                     </ul>
                     <Title title="1234"></Title>
                     <Title title="456"></Title>
                </ChildrenComponent>

                <ChildrenComponent children={[cc]}>

                </ChildrenComponent>
            </div> 
        )
    }
}

export default Parent