/*

            <Flex h="25%">
              <Content>
                <h1 style={{ color: "var(--gray)" }}>Contact</h1>
              </Content>
            </Flex>

            <Flex h="50%">
              <FlexElement flow="row" grow={1} height="100%">
                <FlexElement col={3} grow={1} height="100%"></FlexElement>

                <FlexElement
                  col={6}
                  contentPosition={styles.positions.centerCenter}
                  grow={1}
                >
                  <BusinessCard
                    flipped={flipped}
                    frontContent={
                      <>
                        <h1 style={{ color: "var(--neon-pink)" }}>
                          Niklas Buhl
                        </h1>
                        <p style={{ color: "var(--neon-pink)" }}>
                          Work Tel:
                          <a href="tel:12345678">12 34 56 78</a>
                        </p>
                        <p style={{ color: "var(--neon-pink)" }}>
                          Work Mail:{" "}
                          <a href="mailto:email@example.com">
                            email@example.com
                          </a>
                        </p>
                        <p style={{ color: "var(--neon-pink)" }}>
                          Mobile: <a href="tel:12345678">12 34 56 78</a>
                        </p>
                        <p style={{ color: "var(--neon-pink)" }}>
                          Mail:{" "}
                          <a href="mailto:email@example.com">
                            email@example.com
                          </a>
                        </p>
                      </>
                    }
                    backContent={
                      <>
                        <h1>Graphics</h1>
                      </>
                    }
                  />
                </FlexElement>

                <FlexElement
                  col={3}
                  contentPosition={styles.positions.centerCenter}
                  grow={1}
                >
                  <CleanButton onClick={flip}>
                    <FlexElement flow="column">
                      <StyledFlipIcon $flipped={flipped} />
                      <code style={{ color: "var(--gray)", marginBottom: "0" }}>
                        flip
                      </code>
                    </FlexElement>
                  </CleanButton>
                </FlexElement>
              </FlexElement>
            </Flex>
            <Flex h="25%" contentPosition={styles.positions.centerCenter}>
              <a style={{ textDecoration: "none" }} href="../Niklas%20Buhl.vcf">
                <code style={{ color: "var(--gray)" }}>
                  Download vCard
                  <DownloadIcon
                    style={{
                      width: "11px",
                      marginLeft: "7px",
                      marginTop: "1px",
                    }}
                  />
                </code>
              </a>
            </Flex>


*/
