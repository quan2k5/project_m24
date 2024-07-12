import React from 'react';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import './PaginationUser.scss';
import { useSelector } from 'react-redux';

export default function PaginationUser() {
  const { numberPage } = useParams<{ numberPage: string }>();
  const [searchParams] = useSearchParams();
  const totalProduct=useSelector((state:any)=>state.products.totalValidateProducts);

  const {find,paramId}=useParams();
  const searchParamsString = searchParams.toString();
  const navigate = useNavigate();
  const handleBtnPage = (page: number) => {
    navigate(`/user/products/${find}/${paramId}/page/${page}?${searchParamsString}`);
  };
  const handlePrevPage = () => {
    const prevPage = Number(numberPage) - 1;
    navigate(`/user/products/${find}/${paramId}/page/${prevPage}?${searchParamsString}`);
  };

  const handleNextPage = () => {
    const nextPage = Number(numberPage) + 1;
      navigate(`/user/products/${find}/${paramId}/page/${nextPage}?${searchParamsString}`)
  };

  const renderBtn = () => {
    const liItems: JSX.Element[] = [];
    for (let i = 0; i < Math.ceil(totalProduct / 5); i++) {
      liItems.push(
        <li
          key={i}
          className='userpaginationproduct_btn'
          onClick={() => handleBtnPage(i + 1)}
          style={{
            backgroundColor: Number(numberPage) === i + 1 ? 'orange' : 'white',
            color: Number(numberPage) === i + 1 ? 'white' : 'black',
          }}
        >
          {i + 1}
        </li>
      );
    }
    return liItems;
  };
  return (
    <div className='pagination_user_part'>
      <ul className='pagination_btnlist'>
        {!(Number(numberPage) <= 1) && (
          <li className='userpaginationproduct_btn' onClick={handlePrevPage}>
            <CaretLeftOutlined />
          </li>
        )}
        {renderBtn()}
        {!(Number(numberPage) >= Math.ceil(totalProduct / 4)) && (
          <li className='userpaginationproduct_btn' onClick={handleNextPage}>
            <CaretRightOutlined />
          </li>
        )}
      </ul>
    </div>
  );
}
