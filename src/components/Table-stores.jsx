import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DeleteSubsidiary, EditSubsidiaryForm } from './ModalSucursales';

export default function ItemStores() {
  const [subsidiaryList, setsubsidiaryList] = useState([]);
  const [subsidiaryData, setsubsidiaryData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/subsidiary'
        );
        setsubsidiaryList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (data) => {
    setsubsidiaryData(data);
    setIsEditModalOpen(true);
  };

  const handleDelete = (data) => {
    setsubsidiaryData(data);
    setIsDeleteModalOpen(true);
  };
  const closeModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <section className="p-2">
      {subsidiaryList.map((element) => {
        return (
          <div
            className="w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-neutral-500 mb-6 sm:overflow-x-auto"
            key={element._id}
          >
            <p
              id="ubuntu-regular"
              className="col-span2 text-center text-neutral-800 text-[16px] "
            >
              {element.name}
            </p>

            <p
              id="ubuntu-regular"
              className="text-center text-neutral-800 text-[14px] lg:text-[16px]"
            >
              {element.street}, {element.town}, {element.state}, {element.cpnum}
            </p>

            <p
              id="ubuntu-regular"
              className="text-center text-neutral-800 text-[14px] lg:text-[16px]"
            >
              {element.email}
            </p>
            <p
              id="ubuntu-regular"
              className="text-center text-neutral-800 text-[14px] lg:text-[16px]"
            >
              {element.phone}
            </p>
            <div className=" flex flex-row gap-2 justify-center">
              <img
                src="/icons/edit-yellow.svg"
                alt=""
                className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
                onClick={() => handleEdit(element)}
              />
              <img
                className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
                src="/icons/delete-yellow.svg"
                alt=""
                onClick={() => handleDelete(element)}
              />
            </div>
          </div>
        );
      })}
      {isEditModalOpen && (
        <EditSubsidiaryForm
          onClose={closeModal}
          subsidiaryData={subsidiaryData}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteSubsidiary
          onClose={closeModal}
          subsidiaryData={subsidiaryData}
        />
      )}
    </section>
  );
}
