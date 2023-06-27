import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { orders } from '../../fake-data/data'
import { useAppDispatch } from '../../store/hooks';
import style from './DeleteModal.module.css'
import { deleteOrder } from '../../features/ordersSlice';

type Props = {
  setModalShow: (value: boolean) => void;
  modalShow: boolean,
  deleteOrderId: number
}

export const DeleteModal: FC<Props> = ({ setModalShow, modalShow, deleteOrderId }) => {
  const order = orders.find((order) => order.id === deleteOrderId)
  const dispatch = useAppDispatch()

  const handleDeleteOrder = async () => {
    try {
      dispatch(deleteOrder(deleteOrderId))
    } catch (error) {
      console.log(error)
    } finally {
      setModalShow(false)
    }
  }
  return (
    <Modal
      show={modalShow}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          Are you sure you want to delete order?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{order?.title}</h4>
        <p>
          Description: {order?.description}
        </p>
        <p>
          Created at: {order?.date}
        </p>
        <p>
          {order?.products.length} products
        </p>
      </Modal.Body>
      <Modal.Footer className={style.modal_footer}>
        <Button className={style.close_btn} onClick={() => setModalShow(false)}>Close</Button>
        <Button onClick={handleDeleteOrder} className={style.delete_btn}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}