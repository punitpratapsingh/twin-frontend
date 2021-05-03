import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  genericHitEndpoint, apiMessageAction,
} from "../../redux/actions";
import { APPLICATION_ROUTES } from '../../constants';
import LoadingOverlay from "../../components/LoadingOverlay";
import "./index.scss";

const Home = (props) => {
  useEffect(() => {
      document.title = "Home";
  }, []);

  const placeCall = () => {
    const fromName = document.getElementById("fromName").value;
    const fromNumber = document.getElementById("fromNumber").value;
    const toName = document.getElementById("toName").value;
    const toNumber = document.getElementById("toNumber").value;
    const duration = document.getElementById("duration").value;
    console.log(fromName);
    console.log(fromNumber);
    console.log(toName);
    console.log(toNumber);
    console.log(duration);
    props.triggerHitEndpoint(
      APPLICATION_ROUTES.MAKE_CALL,
      {
        from: fromNumber,
        fromName,
        toName,
        to: toNumber,
        callDuration: duration,
      }
    );
  };

  const {
    fetching,
    apiMessage,
  } = props;

  return (
      <div className='main-div'>
      {LoadingOverlay({ show: fetching })}
      <div className='center-div'>
        <form>
  <div className='infoText'>From Name{JSON.stringify(apiMessage)}</div>
          <input class='inpt' id='fromName' type='text'/>
          <div className='infoText'>From Number</div>
          <input class='inpt' id='fromNumber' type='number'/>
          <div className='infoText'>To Name</div>
          <input class='inpt' id='toName' type='text'/>
          <div className='infoText'>To Number</div>
          <input class='inpt' id='toNumber' type='text'/>
          <div className='infoText'>Duration(In minutes) </div>
          <select className='inpt' id='duration' style={{ padding: '10px', height: '36px' }}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </form>
        <button className='btn' onClick={placeCall}>
          Call
        </button>
      </div>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerHitEndpoint: (endpoint, payload) => dispatch(genericHitEndpoint({ endpoint, payload })),
  };
};

const mapStateToProps = (state) => {
  const {
    fetching,
    apiMessage,
  } = state;
  return {
    fetching,
    apiMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
