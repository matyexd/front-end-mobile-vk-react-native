import {
  GET_PHOTO_FAIL,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_REQUEST,
} from '@type/profilePhoto';

const defaultState = {
  photos: {
    response: {
      count: 3,
      items: [
        {
          album_id: -6,
          date: 1613632112,
          id: 457244124,
          owner_id: 139891543,
          post_id: 557,
          sizes: [
            {
              height: 108,
              url: 'https://sun9-46.userapi.com/impf/yqXLTreCahSWr5wk1_KjvzDepD5ZJoK8DEsuHQ/D8BaSkeANt4.jpg?size=130x108&quality=96&sign=f57c0169c576971e93faa31827c3d96d&c_uniq_tag=Vtr1wlKtJG7ttbi0c9_h1bFSq3a_EHoAxpz5F_NcVs0&type=album',
              type: 'm',
              width: 130,
            },
            {
              height: 108,
              url: 'https://sun9-46.userapi.com/impf/yqXLTreCahSWr5wk1_KjvzDepD5ZJoK8DEsuHQ/D8BaSkeANt4.jpg?size=130x108&quality=96&sign=f57c0169c576971e93faa31827c3d96d&c_uniq_tag=Vtr1wlKtJG7ttbi0c9_h1bFSq3a_EHoAxpz5F_NcVs0&type=album',
              type: 'o',
              width: 130,
            },
            {
              height: 167,
              url: 'https://sun9-46.userapi.com/impf/yqXLTreCahSWr5wk1_KjvzDepD5ZJoK8DEsuHQ/D8BaSkeANt4.jpg?size=200x167&quality=96&sign=c80442a4ce8085f2e3a14506d178f2be&c_uniq_tag=LmLy-f3Daurwgp2pz_P2BTRu7l77qYyGciuONnecfjY&type=album',
              type: 'p',
              width: 200,
            },
            {
              height: 267,
              url: 'https://sun9-46.userapi.com/impf/yqXLTreCahSWr5wk1_KjvzDepD5ZJoK8DEsuHQ/D8BaSkeANt4.jpg?size=320x267&quality=96&sign=03165b6c5ebca2b31dc18254fd0b99ba&c_uniq_tag=3M0jvwj8RVByzTxOATPWOT0UsfPsjubG1pYuKMRKjCM&type=album',
              type: 'q',
              width: 320,
            },
            {
              height: 425,
              url: 'https://sun9-46.userapi.com/impf/yqXLTreCahSWr5wk1_KjvzDepD5ZJoK8DEsuHQ/D8BaSkeANt4.jpg?size=510x425&quality=96&sign=61481792854d14aae4165d408a50fe21&c_uniq_tag=zY6HHsxQ2QH8j2JZ3kP5xgHNPCW2RT2pd0YVhDAWe8g&type=album',
              type: 'r',
              width: 510,
            },
            {
              height: 62,
              url: 'https://sun9-46.userapi.com/impf/yqXLTreCahSWr5wk1_KjvzDepD5ZJoK8DEsuHQ/D8BaSkeANt4.jpg?size=75x62&quality=96&sign=30865f5fe115cf84e8dc77c8fbc6c104&c_uniq_tag=KBxKcN5bxHK3pPzq4OopfF6icqBxEYYrnjgUthcHZtQ&type=album',
              type: 's',
              width: 75,
            },
            {
              height: 495,
              url: 'https://sun9-46.userapi.com/impf/yqXLTreCahSWr5wk1_KjvzDepD5ZJoK8DEsuHQ/D8BaSkeANt4.jpg?size=594x495&quality=96&sign=3826366a496c526623ecdbe5aa2a5738&c_uniq_tag=HEW7PgcA5qnE-TDpXrs2xBSdCyxAXEcdfvP1WTwxmaI&type=album',
              type: 'x',
              width: 594,
            },
          ],
          text: '',
          has_tags: false,
        },
        {
          album_id: -6,
          date: 1597324332,
          id: 457243078,
          owner_id: 139891543,
          post_id: 530,
          sizes: [
            {
              height: 130,
              url: 'https://sun9-86.userapi.com/impf/tWJ4aLcB9E1ich_Thhde3AlClnuurKiQ0KnNlA/dxNZpezW4ps.jpg?size=130x130&quality=96&sign=9938c2bb73cfbb207abdcab69fabdb2d&c_uniq_tag=URp4KqFXKVifRFU90WoXhHm8HbRliExTvYgSEOy-0M8&type=album',
              type: 'm',
              width: 130,
            },
            {
              height: 130,
              url: 'https://sun9-86.userapi.com/impf/tWJ4aLcB9E1ich_Thhde3AlClnuurKiQ0KnNlA/dxNZpezW4ps.jpg?size=130x130&quality=96&sign=9938c2bb73cfbb207abdcab69fabdb2d&c_uniq_tag=URp4KqFXKVifRFU90WoXhHm8HbRliExTvYgSEOy-0M8&type=album',
              type: 'o',
              width: 130,
            },
            {
              height: 200,
              url: 'https://sun9-86.userapi.com/impf/tWJ4aLcB9E1ich_Thhde3AlClnuurKiQ0KnNlA/dxNZpezW4ps.jpg?size=200x200&quality=96&sign=73c9686d1bb6d5e2dfb2745b74a139ff&c_uniq_tag=Kzjtsmfy_ULPglmxLoXqks1DK12343YHXwei4UPlzxI&type=album',
              type: 'p',
              width: 200,
            },
            {
              height: 320,
              url: 'https://sun9-86.userapi.com/impf/tWJ4aLcB9E1ich_Thhde3AlClnuurKiQ0KnNlA/dxNZpezW4ps.jpg?size=320x320&quality=96&sign=ac4e909af539194f7e3f24045ce8b82c&c_uniq_tag=wWkNf7fnZpgsmVUtx_mkbGq0u2dOv7kmFN8Rb09Pjsc&type=album',
              type: 'q',
              width: 320,
            },
            {
              height: 510,
              url: 'https://sun9-86.userapi.com/impf/tWJ4aLcB9E1ich_Thhde3AlClnuurKiQ0KnNlA/dxNZpezW4ps.jpg?size=510x510&quality=96&sign=2a31b21360cefd096c4277b5c6c56884&c_uniq_tag=FDnTnbvSZ8G4aO4F3Fe_MCB9JAkp1wAvqhz4xAe9m7w&type=album',
              type: 'r',
              width: 510,
            },
            {
              height: 75,
              url: 'https://sun9-86.userapi.com/impf/tWJ4aLcB9E1ich_Thhde3AlClnuurKiQ0KnNlA/dxNZpezW4ps.jpg?size=75x75&quality=96&sign=5a3416e847bb87366af5581d5793ec58&c_uniq_tag=Ubs0t-8vJr7g7H2cz9gWvYZZrDeGiVQqA6XCjZ3kz_4&type=album',
              type: 's',
              width: 75,
            },
            {
              height: 604,
              url: 'https://sun9-86.userapi.com/impf/tWJ4aLcB9E1ich_Thhde3AlClnuurKiQ0KnNlA/dxNZpezW4ps.jpg?size=604x604&quality=96&sign=e5e46ac62e93156f4a079621068e72f7&c_uniq_tag=Battnn4VHr2z89x1KLEcdUhscAeMjB5_IVULfoN3o4Q&type=album',
              type: 'x',
              width: 604,
            },
            {
              height: 719,
              url: 'https://sun9-86.userapi.com/impf/tWJ4aLcB9E1ich_Thhde3AlClnuurKiQ0KnNlA/dxNZpezW4ps.jpg?size=719x719&quality=96&sign=f3fd54dab7c6efbce9dbd4d58bfc22b6&c_uniq_tag=D4Aa3atgXTl8bBO5rNWmUckiS_IFrEmsNXBV95Kc_Eg&type=album',
              type: 'y',
              width: 719,
            },
          ],
          text: '',
          has_tags: false,
        },
        {
          album_id: 230497046,
          date: 1459679006,
          id: 408813246,
          owner_id: 139891543,
          sizes: [
            {
              height: 130,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=73x130&quality=96&sign=b12fb964528e37d8c82ca8debaab7e10&c_uniq_tag=BEBVGvQXMylZoZm69xAdfqq16E-9NAxiNR4kRubZ_VQ&type=album',
              type: 'm',
              width: 73,
            },
            {
              height: 231,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=130x231&quality=96&sign=0eaba3c2f253347cb8a857579d49d87a&c_uniq_tag=81t29XHr_PIJA7jFVMCwpmXw6Pbl6Itds9XZccHVUSs&type=album',
              type: 'o',
              width: 130,
            },
            {
              height: 355,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=200x356&quality=96&sign=0fbe971f8c33c663e85f45f81e219293&c_uniq_tag=H2Gc6ljVaC3WZL1eP5TrwAIy277MOkenhvmtZVy67cs&type=album',
              type: 'p',
              width: 200,
            },
            {
              height: 569,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=320x569&quality=96&sign=b4dfc0de385688e30e469151f221edaa&c_uniq_tag=lsDM9re7rHfgbFw6aAEVNNPxm6haZ5oYTAcpWcDWRE8&type=album',
              type: 'q',
              width: 320,
            },
            {
              height: 900,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=510x900&quality=96&crop=0,0,1080,1906&sign=6221e818a4f6314a574ed89269904598&c_uniq_tag=GZt3z_AOt-aMfntORmXaVw0Cyo7agyxPMPz9rFYotzw&type=album',
              type: 'r',
              width: 510,
            },
            {
              height: 75,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=42x75&quality=96&sign=43fa417e9748de49385310cf26c99ce7&c_uniq_tag=rX7f7DeTm9tRKBPo6BdmKtMWGJFuzplHmVbDcSvrP-I&type=album',
              type: 's',
              width: 42,
            },
            {
              height: 1920,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=1080x1920&quality=96&sign=64037b21611f35b1f74f8022e01a323d&c_uniq_tag=tM1BFc2_ZPp-gu2GUIgziI28U9Y59DJjbw3LxO3PggU&type=album',
              type: 'w',
              width: 1080,
            },
            {
              height: 604,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=340x604&quality=96&sign=f56989e7aaa6266b2a9d573a4a8a023c&c_uniq_tag=-_9IFZOAZFhPf0ghR1k3ILHcLXZwuFX2iZoo-iIMDa0&type=album',
              type: 'x',
              width: 340,
            },
            {
              height: 807,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=454x807&quality=96&sign=db7f006671d4642bececacac95733487&c_uniq_tag=MKZRt3bzkNCmgKHtuL4r-qMpeKIr4Z5WQL7FiL1dg4I&type=album',
              type: 'y',
              width: 454,
            },
            {
              height: 1080,
              url: 'https://sun9-85.userapi.com/impf/c633323/v633323543/2134f/eN0mfSY9F5c.jpg?size=607x1080&quality=96&sign=baa378f2437b466faf159540f2d28fbd&c_uniq_tag=VTBAS-hlkXARJFvsDF_hep97rQaPcKBQveKXTE3aYBs&type=album',
              type: 'z',
              width: 607,
            },
          ],
          text: '',
          has_tags: false,
        },
      ],
    },
  },
  error: '',
  isFetching: false,
};

export default function getPhotoUserReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      return {...state, isFetching: true};
    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        photos: action.payload,
      };
    case GET_PHOTO_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
