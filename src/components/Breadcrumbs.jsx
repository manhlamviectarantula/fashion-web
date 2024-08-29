import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname, state } = location;
  // const pathnames = pathname.split('/').filter(x => x);

  // console.log('state', state)
  // console.log('pathnames', pathnames)
  // console.log(location)
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to="/categoryList"><Link color="text.primary"><strong>DANH MỤC SẢN PHẨM</strong></Link></NavLink>
        {state?.title ? <NavLink to={`/categoryList/${state.name}`} state={{ title: state.title }}><Link color="text.primary"><strong>{state.title}</strong></Link></NavLink> : ""}
        {state?.product ? <Link color="text.primary"><strong>{state.product}</strong></Link> : ""}

        {/* {pathnames.map((name, index) => {
          return (
            <Link
              color="text.primary"
            >
              <strong>
                {pathnames[index] === 'categoryList' ? 'DANH MỤC SẢN PHẨM' : state.title}
              </strong>
            </Link>
          );
        })} */}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
