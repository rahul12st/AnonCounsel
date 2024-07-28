import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";

//INTERNAL IMPORT
import {
  ChechIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "../Utils/apiFeature";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //  STATE VARIABLE
  const [address, setAddress] = useState("");
  const [contractMembership, setContractMembership] = useState([]);
  const [Free, setFree] = useState();
  const [userMembership, setUserMembership] = useState({});

  //FETCH DATA TIME OF PAGE LOAD
  const fetchData = async () => {
    try {
      //LOAD FREE TRAIL
      const freeTrail = localStorage.getItem("freeTrail");
      const FREE_TRAIL = JSON.parse(freeTrail);
      setFree(freeTrail);

      //GET CONTRACT
      const contract = await connectingWithContract();
      const connectAccount = await connectWallet();
      setAddress(connectAccount);

      console.log(connectAccount);

      const oneYear = await contract.getMembership(1);
      const twoYear = await contract.getMembership(2);
      const threeYear = await contract.getMembership(3);

      //LIST OF MEMBERSHIPS
      contractMembership = [
        {
          memberShip_name: oneYear?.name,
          memberShip_date: oneYear?.date,
          memberShip_id: oneYear?.id.toNumber(),
          memberShip_cost: ethers.utils.formatUnits(
            oneYear?.cost.toString(),
            "ether"
          ),
        },
        {
          memberShip_name: twoYear?.name,
          memberShip_date: twoYear?.date,
          memberShip_id: twoYear?.id.toNumber(),
          memberShip_cost: ethers.utils.formatUnits(
            twoYear?.cost.toString(),
            "ether"
          ),
        },
        {
          memberShip_name: threeYear?.name,
          memberShip_date: threeYear?.date,
          memberShip_id: threeYear?.id.toNumber(),
          memberShip_cost: ethers.utils.formatUnits(
            threeYear?.cost.toString(),
            "ether"
          ),
        },
      ];
      setContractMembership(contractMembership);

      //USER MEMBERSHIP
      const userMembership = await contract.getUserMembership(connectAccount);

      userMembership = {
        addressUser: userMembership.addressUser.toLowerCase(),
        expireDate: userMembership.expireDate,
        cost: ethers.utils.formatUnits(userMembership.cost.toString(), "ether"),
        membershipId: userMembership.membershipId.toNumber(),
        id: userMembership.id.toNumber(),
      };
      setUserMembership(userMembership);

      const proMember = JSON.stringify(userMembership);
      localStorage.setItem("UserDetail", proMember);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const listMembership = async () => {
    //LISTING MEMBERSHIP

    const amount = 0.03;
    const MEMBERSHIP_NAME = "Three Year";

    const MEMBERSHIP_COST = ethers.utils.parseUnits(amount.toString(), "ether");
    const MEMBERSHIP_DATE = "July 31 2024";
    //CONTRACT
    const contract = await connectingWithContract();
    const list = await contract.list(
      MEMBERSHIP_NAME,
      MEMBERSHIP_COST,
      MEMBERSHIP_DATE
    );

    await list.wait();
    console.log(list);
  };

  const buyMembership = async (memberShip_id) => {
    const contract = await connectingWithContract();
    const connectAccount = await connectWallet();
    setAddress(connectAccount);
    try {
      if (memberShip_id == 0.01) {
        const today = Date.now() + 31536000000;
        let date = new Date(today);
        const expiredDate = date.toLocaleDateString("en-US");
        const money = ethers.utils.parseEther("1");

        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expiredDate.toString(),
          {
            value: money.toString(),
          }
        );
        await mintTransaction.wait();
        const freeTrail = JSON.stringify("Pro Member");
        localStorage.setItem("freeTrail", freeTrail);
        console.info("contract call successs", mintTransaction);
        window.location.reload();
      } else if (memberShip_id == 2) {
        const today = Date.now() + 31536000000 * 2;
        let date = new Date(today);
        const expiredDate = date.toLocaleDateString("en-US");
        console.log(expiredDate);
        const money = ethers.utils.parseEther("0.02");
        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expiredDate.toString(),
          {
            value: money.toString(),
          }
        );
        await mintTransaction.wait();
        const freeTrail = JSON.stringify("Pro Member");
        localStorage.setItem("freeTrail", freeTrail);
        console.info("contract call successs", mintTransaction);
        window.location.reload();
      } else {
        const today = Date.now() + 31601495874*3;
        let date = new Date(today);
        const expiredDate = date.toLocaleDateString("en-US");
        console.log(expiredDate);
        const money = ethers.utils.parseEther("0.03");
        const mintTransaction = await contract.mint(
          memberShip_id,
          connectAccount,
          expiredDate.toString(),
          {
            value: money.toString(),
          }
        );
        await mintTransaction.wait();
        const pro_member = "Pro Member";
        const freeTrail = JSON.stringify(pro_member);
        localStorage.setItem("freeTrail", freeTrail);
        console.info("contract call successs", mintTransaction);
        window.location.reload();
      }
    } catch (error) {
      console.error("contract call failure", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        listMembership,
        buyMembership,
        connectWallet,
        Free,
        address,
        contractMembership,
        userMembership,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
