import styled from "styled-components"

export const Container = styled.div`

  max-width: 53rem;
  border: ${ ({theme}) => `1px solid ${theme.COLORS.ITEM_BG}`};
  border-radius: .8rem;
  overflow: hidden;

  .method {
    display: flex;
    height: 8.1rem;

    >.line {
      border-left: ${ ({theme}) => `1px solid ${theme.COLORS.ITEM_BG}`};
    }
  }

  .info {
    min-height: 24.4rem;
  }

  &[data-method='PIX'] {
    .info {
      .pix {
        display: flex;
        align-items: center;
        justify-content: center;

        >img {
          margin: 3.2rem;
          width: clamp(18rem, 50%, 27rem);
          height: clamp(18rem, 50%, 27rem);
        }
      }

      .card {
        display: none;
      }
    }
  }

  &[data-method='CARD'] {
    .info {
      .pix {
        display: none;
      }

      .card {
        display: flex;

        .state {
          display: none;

          .waiting, 
          .approved,
          .delivered {
            display: none;
          }

          >img {
            margin: 3.2rem;
            width: clamp(9.6rem, 30%, 12.8rem);
            height: clamp(9.6rem, 30%, 12.8rem);
          }
          >h3 {
            font-size: clamp(1.8rem, 4.5vw ,2.4rem);
            line-height: 160%;
            text-align: center;
          }
        }

      }
    }
  }

  &[data-state='pending'] {

    #credit-card-form {
      display: none;
    }

    .info .card .state  {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;

      .waiting {
        display: inline-block;
      }
    }
  }
  &[data-state='preparing'] {

    #credit-card-form {
      display: none;
    }

    .info .card .state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;

      .approved {
        display: inline-block;
      }
    }
  }
  &[data-state='delivered'] {

    #credit-card-form {
      display: none;
    }

    .info .card .state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      
      .delivered {
        display: inline-block;
      }
    }
  }
`

