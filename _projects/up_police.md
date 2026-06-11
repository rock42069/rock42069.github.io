---
layout: page
title: UP Police Notice Information System
description: Multilingual RAG system for police notices, deployed in production and showcased at the All India Police Conference 2024
importance: 1
category: Work
related_publications: false
---

A retrieval-augmented information system built for the Uttar Pradesh Police (Aug 2024 – Jan 2025), deployed at [rag.agrapolice.in](https://rag.agrapolice.in).

## What it does

Police notices in India are largely published as scanned Hindi documents, making them hard to search or query. This system makes them accessible through natural-language questions in multiple languages.

## How it works

- **Ingestion** — extracted Hindi text from notice documents, performed semantic chunking, and indexed everything in **Pinecone** for vector retrieval.
- **Application** — a multilingual **React + Flask** web app that answers citizen and officer queries over the indexed corpus.
- **Deployment** — running in production at [rag.agrapolice.in](https://rag.agrapolice.in).

## Recognition

Showcased at the **All India Police Conference 2024**, and received a **Letter of Appreciation from the DCP, Agra City**.
