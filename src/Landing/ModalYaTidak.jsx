import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { useAuth } from '../authentication/AuthContext';

function ModalYaTidak() {
  const [openModal, setOpenModal] = useState(false);
  const { logout } = useAuth()
  const Keluar = () => {
    logout()
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-[250px] h-10 m-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Keluar</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Yakin ingin keluar?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => Keluar()}>
                Ya
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Tidak
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalYaTidak