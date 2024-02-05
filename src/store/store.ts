import { create } from "zustand";

export interface IUseStore {
  searchVideos: [];
  setSearchVideos: (searchVideos: []) => void;
  searchUse: boolean;
  setSearchUse: (searchUse: boolean) => void;
  videoHover: string;
  setVideoHover: (videoHover: string) => void;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  headerSearchLoader: boolean;
  setHeaderSearchLoader: (headerSearchLoader: boolean) => void;
  errorWatch: string;
  setErrorWatch: (errorWatch: string) => void;
}

const useStore = create<IUseStore>((set) => ({
  searchVideos: [],
  setSearchVideos: (searchVideos) =>
    set(() => ({ searchVideos: searchVideos })),
  searchUse: false,
  setSearchUse: (searchUse) => set(() => ({ searchUse: searchUse })),
  videoHover: "",
  setVideoHover: (videoHover) => set(() => ({ videoHover: videoHover })),
  searchValue: "",
  setSearchValue: (searchValue) => set(() => ({ searchValue: searchValue })),
  headerSearchLoader: false,
  setHeaderSearchLoader: (headerSearchLoader) =>
    set(() => ({ headerSearchLoader: headerSearchLoader })),
  errorWatch: "",
  setErrorWatch: (errorWatch: string) =>
    set(() => ({ errorWatch: errorWatch })),
}));

export default useStore;
