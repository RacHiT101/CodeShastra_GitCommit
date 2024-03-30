import React, { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Navbar = () => {
  const userdata = JSON.parse(sessionStorage.getItem('userdata'));
  const location = useLocation();
  const isNew = location.state?.isNew;
  const currentPathname = window.location.pathname;
  const { selectedStakeholder } = useContext(StakeholderContext);
  const { name, cat } = useParams();
  console.log(cat);
  let { user, Entity, Employee } = UserAuth();
  // console.log("eemp"+Employee);
  // console.log("enti"+Entity);
  console.log(user);
  const nav = useNavigate();
  // const user = {
  //   name: 'Pratik Jain',
  //   position: 'Manager',
  //   profileImage:
  //     'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  // };

  user = {
    ...user,
    position: 'Manager',
    profileImage:
      'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  };

 

  const data = {
    userdata : userdata
  }

  
  return (
    <div
      className={`text-gray-800 w-[93%] ml-auto border-b-2 border-gray-300`}>
      <div className="bg-white  flex justify-between items-center h-[4rem]">
        {!cat ? (
          !currentPathname.includes('/engagements/') ? (
            <h1 className="ml-5 text-xl font-bold pr-4 h-full flex items-center">
              Inbox
            </h1>
          ) : (
            <div className="flex items-center">
              <img
                src={Arrow}
                alt=""
                className="transform rotate-180 p-6 cursor-pointer"
                onClick={() => {
                  isNew ? nav(-2) : nav(-1);
                }}
              />{' '}
              <h1 className=" text-xl font-bold pr-4 h-full flex items-center">
                Engagements
              </h1>
            </div>
          )
        ) : (
          <div className="flex items-center">
            <img
              src={Arrow}
              alt=""
              className="transform rotate-180 p-6 cursor-pointer"
              onClick={() => {
                !currentPathname.endsWith('/neweng')
                  ? nav(`/${cat}`)
                  : nav(`/${cat}/${name}`);
              }}
            />
            <span className="text-[#696975] font-light">Stakeholders</span>
            <img src={brokeArrow} alt="" className="p-4" />
            <span className="text-[#696975] font-light h-full flex items-center">
              {cat?.charAt(0)?.toUpperCase() + cat?.slice(1)}
            </span>
            <img src={brokeArrow} alt="" className="p-4" />
            <span
              className={`${
                currentPathname.endsWith('/neweng')
                  ? 'text-[#696975] font-light'
                  : ''
              }`}>
              {selectedStakeholder}
            </span>
            {currentPathname.endsWith('/neweng') && (
              <>
                <img src={brokeArrow} alt="" className="p-4" />
                <span>New Engagement</span>
              </>
            )}
          </div>
        )}

        <div className="h-full pl-2 border-l-2  mr-8 flex items-center cursor-pointer"onClick={() => nav('/MyProfile',{state: data})}>
          <img
            src={userdata.logo}
            alt={user.profileImage}
            className="w-12 h-12 rounded-full object-contain mr-2"
          />
          <div className="flex flex-col">
            <div className="font-bold">{userdata.name}</div>
            <div>{userdata?.isAdmin ? 'Admin' : userdata?.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
