import { create } from "zustand";
import { FeedItemRoot, Post } from "../types/lens";

interface IPublicationStore {
    activePublication: null | Post | FeedItemRoot
    setActivePublication: (publication: Post | FeedItemRoot) => void
}

const useActivePublicationStore = create<IPublicationStore>((set) => ({
    activePublication: null,
    setActivePublication: (publication) => {
        set({
            activePublication: publication,
        });
    },
}));

export default useActivePublicationStore;