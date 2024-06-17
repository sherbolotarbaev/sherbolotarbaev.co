'use client';

import { useDeleteGuestbookMessageMutation } from '@/app/redux/api/guestbook';
import { toast } from 'sonner';

import Button from '@/app/components/button';

interface DeleteButtonProps {
  messageId: number;
  setOpen: (open: boolean) => void;
  setAction: (action: Action | null) => void;
}

export default function DeleteButton({
  messageId,
  setOpen,
  setAction,
}: Readonly<DeleteButtonProps>) {
  const [deleteMessage, { isLoading: isMessageDeleting }] =
    useDeleteGuestbookMessageMutation();

  const handleDelete = (id: number) => {
    toast.promise(deleteMessage(id).unwrap(), {
      position: 'top-right',
      loading: 'Deleting...',
      success: () => {
        setOpen(false);
        setAction(null);
        return 'Successfully deleted';
      },
      error: (error) => {
        return error.data?.message || 'Try again. Something happened on our end';
      },
    });
  };

  return (
    <Button onClick={() => handleDelete(messageId)} theme="blue" load={isMessageDeleting}>
      Delete
    </Button>
  );
}
