---
layout: default
title: Home
---

<div class="hero">
  <h1>ComBayNS 2025 Workshop</h1>
  <p>Combining Bayesian and Neural approaches for Structured Data</p>
  <p>This workshop is part of the <a href="https://2025.ijcnn.org/" class="custom-link">2025 IJCNN Conference</a>, Rome, June 30-July 5 2025</p>
</div>

<section id="important-dates">
    <h2>Paper submission</h2>
    <p>Submission link is available in the <a href="/call-for-papers/">Call for Papers</a> page.</p>
    <p>Be sure to read the submission instructions carefully!</p><br>
    <h2>Important Dates</h2>
    <ul>
      <li><strong>Paper Submission Deadline:</strong> <strike>March 20, 2025</strike> <strong>March 27, 2025</strong></li>
      <li><strong>Notification of Acceptance:</strong> <strong>April 15, 2025</strong></li>
      <li><strong>Workshop Dates: </strong>July 2, 2025</li>
    </ul>
</section>


<section id="program">
  <h2>Workshop Program</h2>
  <div class="program-container">
    <div class="program-event single-card">
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>11:15 – 11:30</p>
            <p class="title">Introduction and dinner plans</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Join us for dinner!</strong></p>
          <p>Please scan the QR code below and fill the form:</p>
          <img src="/assets/images/qr_dinner.jpg" alt="QR Code for Dinner Information" class="dinner-qr-code">
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>11:30 – 12:30</p>
            <p class="title">Keynote talk by Prof. Coates</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Title:</strong> Bayesian Graph Neural Networks and Transformers</p>
          <p><strong>Abstract:</strong> In numerous settings, ranging from medical diagnosis to quantitative finance, we observe interacting entities and need to make predictions based on the observed relationships. We can represent such data using an annotated graph, with nodes representing the entities and edges depicting the relationships. It is important to develop inference methods that can provide confidence bounds and are robust to graph errors such as missing or spurious edges. In this talk, I will introduce a Bayesian graph learning framework that delivers the desired robustness and uncertainty characterization. Critical to this framework is the specification of a graph model, and I will introduce several candidate options. I will then discuss how this framework can be extended to a state-of-the-art graph transformer and a continuous-kernel graph convolution network. I will conclude by highlighting some of the practical applications of the graph learning methods, including recommender systems and circuit design.</p>
          <p><strong>Mark Coates</strong> is a Professor in the Department of Electrical and Computer Engineering at McGill University (Montreal, Canada). He received the B.E. degree in computer systems engineering from the University of Adelaide, Australia, in 1995, and a Ph.D. degree in information engineering from the University of Cambridge, U.K., in 1999. He was a research associate and lecturer at Rice University, Texas, from 1999-2001. In 2012-2013, he worked as a Senior Scientist at Winton Capital Management, Oxford, UK. Coates’ research interests include machine learning, statistical signal processing, and Bayesian and Monte Carlo inference.</p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>12:30 – 12:50</p>
            <p class="title">Ensembles of Multi-scale Kernel Smoothers for Data Imputation</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Authors:</strong> Amit Shreiber, Dalia Fishelov, Neta Rabin</p>
          <p><strong>Abstract:</strong> When collecting a dataset, it usually contains some proportion of incomplete data. Various methods for handling this
missing data exist in the literature, such as deleting observations that contain missing values, or replacing missing values with the mean of the other observations in the relevant variables. Nevertheless, most of the techniques do not consider the geometric structure of the data both in the row (instance) space and the column (feature) space. In this work, we propose a smoothing or regression procedure that operates both on the row and column space of the data, and refines the approximated model in an iterative manner, following ideas from iterative bias reduction models. We provide a mathematical analysis of the method, as well as test its performance of several datasets with diverse missingness mechanisms. Promising results are seen across all of the missingness types and datasets. Last, the proposed multi-scale approximation is general, and may be beneficial for additional machine learning tasks that process tabular data.</p>
          <p><a href="/assets/pdf/enskersmooth.pdf" download>Download Paper (PDF)</a></p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>13:00 – 14:00</p>
            <p class="title">Lunch</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p>Let's grab a bite!</p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>14:00 – 15:00</p>
            <p class="title">Keynote talk by Dr. Lutzeyer</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Title:</strong> Avenues for Interaction between Bayesian Methodology and Graph Neural Networks</p>
          <p><strong>Abstract:</strong> Graph Neural Networks (GNNs) have celebrated many academic and industrial successes in the past years; providing a rich ground for theoretical analysis and achieving state-of-the-art results in several learning tasks. In this talk, I will present work in which we propose a data augmentation scheme using Gaussian Mixture Models in the latent space of the penultimate neural network layer. I will furthermore review associated theoretical results in which we upper bound the generalisation error of GNNs (trained under data augmentation) using their associated Rademacher complexity. Interacting with the learned Euclidean representations of structured data may be a broadly applicable avenue for future research introducing Bayesian methodology to neural approaches. I will conclude my talk by reviewing how Bayesian considerations could naturally extend some of our other recent work on orthonormal weight matrices in GNNs and interaction effects in neighbourhoods in graphs. 
The majority of the presented work was done by Yassine Abbahaddou, my final-year PhD student, and in collaboration with his co-supervisors Fragkiskos Malliaros, Amine Aboussalah and Michalis Vazirgiannis.</p>
          <p><strong>Johannes Lutzeyer</strong> is an Assistant Professor in the Computer Science Department of École Polytechnique, IP Paris in France since 2022. Previously, he completed a 2.5-year postdoc, under the supervision of Prof. Michalis Vazirgiannis also at École Polytechnique. He obtained his degrees (BSc, MSc and PhD) in the Statistics Section of the Mathematics Department at Imperial College London under the supervision of Prof. Andrew Walden. Johannes works in the area of Graph Representation Learning, specifically on Graph Neural Networks, and has made contributions to the academic literature in this domain with a small number of publications at the ICLR, ICML and NeurIPS conferences among others.</p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>15:00 – 15:20</p>
            <p class="title">Learn to Jump: Adaptive Random Walks for Long-Range Propagation through Graph Hierarchies</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Authors:</strong> Joël Mathys, Federico Errica </p>
          <p><strong>Abstract:</strong> Message-passing architectures struggle to sufficiently model long-range dependencies in node and graph prediction tasks. We propose a novel approach exploiting hierarchical graph structures and adaptive random walks to address this challenge. Our method introduces learnable transition probabilities that decide whether the walk should prefer the original graph or travel across hierarchical shortcuts. On a synthetic long-range task, we demonstrate that our approach can exceed the theoretical bound that constrains traditional approaches operating solely on the original topology. Specifically, walks that prefer the hierarchy achieve the same performance as longer walks on the original graph. These preliminary findings open a promising direction for efficiently processing large graphs while effectively capturing long-range dependencies.</p>
          <p><a href="/assets/pdf/learnjump.pdf" download>Download Paper (PDF)</a></p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>15:20 – 15:40</p>
            <p class="title">BN-Pool: a Bayesian Nonparametric Approach to Graph Pooling</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Authors:</strong> Daniele Castellana, Filippo Maria Bianchi</p>
          <p><strong>Abstract:</strong> We introduce BN-Pool, the first clustering-based pooling method for Graph Neural Networks (GNNs) that adaptively determines the number of supernodes in a coarsened graph. By leveraging a Bayesian non-parametric framework, BN-Pool employs a generative model capable of partitioning graph nodes into an unbounded number of clusters. During training, we learn the node-to-cluster assignments by combining the supervised loss of the downstream task with an unsupervised auxiliary term, which encourages the reconstruction of the original graph topology while penalizing unnecessary proliferation of clusters. This adaptive strategy allows BN-Pool to automatically discover an optimal coarsening level, offering enhanced flexibility and removing the need to specify sensitive pooling ratios. We show that BN-Pool achieves superior performance across diverse benchmarks.</p>
          <p><a href="/assets/pdf/bnpool.pdf" download>Download Paper (PDF)</a></p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>15:40 – 16:00</p>
            <p class="title">On Learning the Width of Neural Networks</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Authors:</strong> Federico Errica, Henrik Christiansen, Viktor Zaverkin, Mathias Niepert, Francesco Alesiani</p>
          <p><strong>Abstract:</strong> We introduce an easy-to-use technique to learn an unbounded width of a neural network’s layer during training. The technique does not rely on alternate optimization nor hand-crafted gradient heuristics; rather, it jointly optimizes the width and the parameters of each layer via simple backpropagation. We apply the technique to a broad range of data domains such as tables, images, texts, and graphs, showing how the width adapts to the task’s difficulty. By imposing a soft ordering of importance among neurons, it is also possible to dynamically compress the network with no performance degradation.</p>
          <p><a href="/assets/pdf/nnwidth.pdf" download>Download Paper (PDF)</a></p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>16:00 – 16:30</p>
            <p class="title">Tea Break</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p>Enjoy a refreshing tea break.</p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>16:30 – 16:50</p>
            <p class="title">Towards solving Kolmogorov-Arnold Theorem using Variational Optimization</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Authors:</strong> Francesco Alesiani, Federico Errica, Henrik Christiansen</p>
          <p><strong>Abstract:</strong> Kolmogorov Arnold Networks (KANs) are an emerging architecture for building machine learning models. KANs are based on the theoretical foundation of the Kolmogorov-Arnold Theorem and its expansions, which provide an exact representation of a multi-variate continuous bounded function as the composition of a limited number of uni-variate continuous functions. While such theoretical results are powerful, its use as a representation learning alternative to multi-layer perceptron (MLP) hinges on the choice of the number of bases modeling each of the univariate functions. In this work, we show how to address this problem by adaptively learning a potentially infinite number of bases for each univariate function during training. We do so by means of a variational inference optimization problem. Our proposal, called INFINITYKAN, extends the potential applicability of KANs by treating an important hyper-parameter as part of the learning process.</p>
          <p><a href="/assets/pdf/infkan.pdf" download>Download Paper (PDF)</a></p>
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>16:50 – 17:50</p>
            <p class="title">Panel discussion</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p><strong>Join us for the panel discussion!</strong></p>
          <p>Please scan the QR code below and submit your own question:</p>
          <img src="/assets/images/qr_panel.png" alt="QR Code for Panel Questions" class="dinner-qr-code">
        </div>
      </details>
      <details>
        <summary>
          <div class="schedule-item">
            <p class="time"><span class="icon-clock"></span>17:50 – 18:00</p>
            <p class="title">Conclusions and dinner location</p>
          </div>
        </summary>
        <div class="schedule-details">
          <p>Concluding remarks and information regarding dinner arrangements.</p>
        </div>
      </details>
    </div>
  </div>
</section>

<!-- Speakers Section -->

<section id="speakers">
  <h2>Speakers</h2>
  <div class="speakers-container">
      <div class="speaker">
          <img src="/assets/images/coates.png" alt="Prof. Mark Coates">
          <h3>Prof. Mark Coates</h3>
          <p>McGill University</p>
          <details>
            <summary>
              <p class="bio-snippet">Mark Coates is a Professor in the Department of Electrical and Computer Engineering at McGill University (Montreal, Canada)...</p>
            </summary>
            <p class="bio-full">Mark Coates is a Professor in the Department of Electrical and Computer Engineering at McGill University (Montreal, Canada). He received the B.E. degree in computer systems engineering from the University of Adelaide, Australia, in 1995, and a Ph.D. degree in information engineering from the University of Cambridge, U.K., in 1999. He was a research associate and lecturer at Rice University, Texas, from 1999-2001. In 2012-2013, he worked as a Senior Scientist at Winton Capital Management, Oxford, UK. Coates’ research interests include machine learning, statistical signal processing, and Bayesian and Monte Carlo inference.</p>
          </details>
      </div>
      <div class="speaker">
          <img src="/assets/images/lutzeyer.png" alt="Dr. Johannes Lutzeyer">
          <h3>Dr. Johannes Lutzeyer</h3>
          <p>École Polytechnique</p>
          <details>
            <summary>
              <p class="bio-snippet">Johannes Lutzeyer is an Assistant Professor in the Computer Science Department of École Polytechnique, IP Paris in France since 2022...</p>
            </summary>
            <p class="bio-full">Johannes Lutzeyer is an Assistant Professor in the Computer Science Department of École Polytechnique, IP Paris in France since 2022. Previously, he completed a 2.5-year postdoc, under the supervision of Prof. Michalis Vazirgiannis also at École Polytechnique. He obtained his degrees (BSc, MSc and PhD) in the Statistics Section of the Mathematics Department at Imperial College London under the supervision of Prof. Andrew Walden. Johannes works in the area of Graph Representation Learning, specifically on Graph Neural Networks, and has made contributions to the academic literature in this domain with a small number of publications at the ICLR, ICML and NeurIPS conferences among others.
            </p>
          </details>
      </div>
  </div>
</section>

<section id="organizers">
  <h2>Workshop Organizers</h2>
  <div class="organizers-container">
    <div class="organizer">
      <img src="/assets/images/bacciu.jpeg" alt="Davide Bacciu">
      <h3>Davide Bacciu</h3>
      <p>University of Pisa</p>
    </div>
    <div class="organizer">
      <img src="/assets/images/castellana.jpg" alt="Daniele Castellana">
      <h3>Daniele Castellana</h3>
      <p>University of Firenze</p>
    </div>
    <div class="organizer">
      <img src="/assets/images/errica.jpg" alt="Federico Errica">
      <h3>Federico Errica</h3>
      <p>NEC Italy</p>
    </div>
    <div class="organizer">
      <img src="/assets/images/niepert.png" alt="Mathias Niepert">
      <h3>Mathias Niepert</h3>
      <p>University of Stuttgart</p>
    </div>
    <div class="organizer">
      <img src="/assets/images/podda.jpg" alt="Marco Podda">
      <h3>Marco Podda</h3>
      <p>University of Pisa</p>
    </div>
    <div class="organizer">
      <img src="/assets/images/zaghen.png" alt="Olga Zaghen">
      <h3>Olga Zaghen</h3>
      <p>University of Amsterdam</p>
    </div>
  </div>
</section>

<section id="program-committee">
  <h2>Program Committee</h2>
  <div class="committee-container">
      <ul class="committee-column">
          <li><strong>Carlo Abate</strong><br>UiT</li>
          <li><strong>Steve Azzolin</strong><br>University of Trento</li>
          <li><strong>Maria Sofia Bucarelli</strong><br>Sapienza University</li>
          <li><strong>Andrea Cini</strong><br>USI</li>
      </ul>
      <ul class="committee-column">
          <li><strong>Michele Fontanesi</strong><br>University of Pisa</li>
          <li><strong>Claudio Gallicchio</strong><br>University of Pisa</li>
          <li><strong>Julia Gastinger</strong><br>Uni Mannheim</li>
          <li><strong>Filippo Grazioli</strong><br>GSK</li>
          <li><strong>Jimwoo Kim</strong><br>KAIST</li>
      </ul>
      <ul class="committee-column">
          <li><strong>Lorenzo Loconte</strong><br>Uni Edimburgh</li>
          <li><strong>Manuel Madeira</strong><br>EPFL</li>
          <li><strong>Ivan Marisca</strong><br>USI</li>
          <li><strong>Riccardo Massidda</strong><br>University of Pisa</li>
          <li><strong>Luca Miglior</strong><br>University of Pisa</li>
      </ul>
      <ul class="committee-column">
          <li><strong>Matteo Ninniri</strong><br>University of Pisa</li>
          <li><strong>Yiming Qin</strong><br>EPFL</li>
          <li><strong>Matteo Tolloso</strong><br>University of Pisa</li>
          <li><strong>Daniele Zambon</strong><br>USI</li>
      </ul>
  </div>
</section>
